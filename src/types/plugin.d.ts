declare class Config {
    name: string;
    type: string;
}

declare class TeaPlugin {
    onPluginLoad(): void;
    renderComponent(): React.ReactNode;
    config(): Config;
}