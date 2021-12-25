oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g crypto-cli
$ crypto-cli COMMAND
running command...
$ crypto-cli (--version)
crypto-cli/0.0.0 darwin-x64 node-v12.20.0
$ crypto-cli --help [COMMAND]
USAGE
  $ crypto-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`crypto-cli hello PERSON`](#crypto-cli-hello-person)
* [`crypto-cli hello world`](#crypto-cli-hello-world)
* [`crypto-cli help [COMMAND]`](#crypto-cli-help-command)
* [`crypto-cli plugins`](#crypto-cli-plugins)
* [`crypto-cli plugins:inspect PLUGIN...`](#crypto-cli-pluginsinspect-plugin)
* [`crypto-cli plugins:install PLUGIN...`](#crypto-cli-pluginsinstall-plugin)
* [`crypto-cli plugins:link PLUGIN`](#crypto-cli-pluginslink-plugin)
* [`crypto-cli plugins:uninstall PLUGIN...`](#crypto-cli-pluginsuninstall-plugin)
* [`crypto-cli plugins update`](#crypto-cli-plugins-update)

## `crypto-cli hello PERSON`

Hey, hello

```
USAGE
  $ crypto-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Hey, hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/nguyenphuhao/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `crypto-cli hello world`

Say hello world

```
USAGE
  $ crypto-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `crypto-cli help [COMMAND]`

Display help for crypto-cli.

```
USAGE
  $ crypto-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for crypto-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `crypto-cli plugins`

List installed plugins.

```
USAGE
  $ crypto-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ crypto-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `crypto-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ crypto-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ crypto-cli plugins:inspect myplugin
```

## `crypto-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ crypto-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ crypto-cli plugins add

EXAMPLES
  $ crypto-cli plugins:install myplugin 

  $ crypto-cli plugins:install https://github.com/someuser/someplugin

  $ crypto-cli plugins:install someuser/someplugin
```

## `crypto-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ crypto-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ crypto-cli plugins:link myplugin
```

## `crypto-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ crypto-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ crypto-cli plugins unlink
  $ crypto-cli plugins remove
```

## `crypto-cli plugins update`

Update installed plugins.

```
USAGE
  $ crypto-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
