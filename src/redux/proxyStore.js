import swal from 'sweetalert2';
import { Store } from 'react-chrome-redux';

import { PORT_NAME } from 'redux/constants';

export default function setupProxyStore() {
  const store = new Store({
    portName: PORT_NAME,
  });

  store.subscribe(() => {
    // Generic error handler
    const state = store.getState();
    if (state.error) {
      swal('Oops...', state.error, 'error');
    }
  });

  return store;
}