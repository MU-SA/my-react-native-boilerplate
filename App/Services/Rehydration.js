import AsyncStorage from '@react-native-community/async-storage'
import { persistStore } from 'redux-persist'

import ReduxPersistConfig from 'Config/ReduxPersist'

// import { AppCreators } from 'Actions/App'
// import { navigate } from 'Services/NavigationService'

const updateReducers = (store: Object) => {
  const { reducerVersion } = ReduxPersistConfig
  // const startup = () => store.dispatch(AppCreators.startup())

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        // Purge store
        console.warn('PURGE')
        // navigate('Auth')
        persistStore(store, null).purge()
        AsyncStorage.setItem('reducerVersion', reducerVersion)
      } else {
        persistStore(store, null)
      }
    })
    .catch(() => {
      persistStore(store, null)
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    })
}

export default { updateReducers }
