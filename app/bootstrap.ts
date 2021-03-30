import { startApp } from 'core-native'
import { appConfig } from './config/config'
import { ErrorHandler } from './module/ErrorHandler'
import { AppComponent } from './module/main'
import { Navigation } from './module/Navigation'
import { NetworkService } from './service/NetworkService'

export function bootstrap() {
    startApp(
        {
            registeredAppName: 'YBProject',
            componentType: Navigation.RootRouter,
            errorListener: new ErrorHandler(),
            beforeRendering: async () => {
                NetworkService.init(appConfig)
            },
        }
    )
}