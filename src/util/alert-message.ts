import {Dialog, Loading} from 'quasar';


export function showErrorMessage(errorMessage: string) {
  Loading.hide();
  Dialog.create({
    title: 'Error',
    message: errorMessage
  });
}

export function showSuccessMessage(alertMessage: string) {
  Loading.hide();
  Dialog.create({
    title: 'Success',
    message: alertMessage
  });
}

export function showHTMLSuccessMessage(alertMessage: string) {
  Loading.hide();
  Dialog.create({
    title: 'Success',
    message: alertMessage,
    html: true
  });
}
