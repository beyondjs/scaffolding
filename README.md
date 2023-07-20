# @beyond-js/scaffold

`@beyond-js/scaffold` is a command-line tool that helps you generate the basic structure for packages and modules within the BeyondJS framework. It provides an interactive way to create packages and modules, allowing you to quickly set up your applications, websites, functions, or modules.

## Installation

You can install `@beyond-js/scaffold` globally using npm:

```shell
npm install -g @beyond-js/scaffold
```

## Usage

### Creating a Package

To create a new package, run the following command and follow the interactive prompts:

```shell
beyond add package
```

This command will guide you through creating a new package, specifying its name and desired configuration.

### Creating Modules

To create a new module within an existing package, run the following command and follow the interactive prompts:

```shell
beyond add module
```

This command will prompt you to select the package and module type, such as `start`, `ts`, `page`, `widget`, `layout`, or `code`. You can also define your own custom module types.

## Module Types

The following are the default module types provided by `@beyond-js/scaffold`:

- `start`: Represents the entry point or starting module for the package.
- `ts`: TypeScript module.
- `page`: Represents a page module.
- `widget`: Represents a web component or widget module.
- `layout`: Represents a layout module.
- `code`: Represents a generic code module.

You can create modules of these types or define your own custom module types based on your specific needs.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/beyond-js/scaffold). 

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for more information.