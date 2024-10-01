import './index.css'

export default class SamplePlugin implements TeaPlugin {

	config(): Config {
		return {
			name: 'SamplePlugin',
			type: 'plugin'
		}
	}

	onPluginLoad() {
		console.log('SamplePlugin init')
	}

	renderComponent(): React.ReactNode {
		return <h1>SamplePlugin</h1>
	}
}