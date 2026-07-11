import '@testing-library/jest-dom';

// jsdom doesn't implement HTMLDialogElement's showModal/close — polyfill the
// bare minimum so components using native <dialog> are testable.
if (!HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute('open', '');
  };
}
if (!HTMLDialogElement.prototype.close) {
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute('open');
    this.dispatchEvent(new Event('close'));
  };
}
