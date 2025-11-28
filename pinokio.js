module.exports = {
  title: "Cursor Agent",
  icon: "icon.jpeg",
  description: "Cursor Agent",
  link: "https://cursor.com/blog/cli",
  install: [{
    when: "{{platform === 'win32'}}",
    method: "shell.run",
    params: {
      shell: "{{kernel.path('bin/miniconda/Library/bin/bash.exe')}}",
      message: "curl https://cursor.com/install -fsSL | bash"
    }
  }, {
    when: "{{platform !== 'win32'}}",
    method: "shell.run",
    params: {
      message: "curl https://cursor.com/install -fsSL | bash"
    }
  }],
  run: [{
    when: "{{platform === 'win32'}}",
    method: "shell.run",
    params: {
      shell: "{{kernel.path('bin/miniconda/Library/bin/bash.exe')}}",
      message: "cursor-agent {{args.prompt ? JSON.stringify(args.promt) : ''}}",
      path: "{{args.cwd}}",
      input: true
    }
  }, {
    when: "{{platform !== 'win32'}}",
    id: "run",
    method: "shell.run",
    params: {
      message: "cursor-agent {{args.prompt ? JSON.stringify(args.promt) : ''}}",
      path: "{{args.cwd}}",
      input: true
    }
  }]
}
