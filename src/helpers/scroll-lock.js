export function enableScrollLock(marginTop = 0) {
  document.body.style.marginTop = `-${marginTop || window.scrollY}px`;
  document.body.style.position = 'fixed';
  document.body.style.overflowY = 'scroll';
}

export function disableScrollLock() {
  document.body.style.position = '';
  document.body.style.overflowY = '';

  if (document.body.style.marginTop) {
    const scrollTop = -parseInt(document.body.style.marginTop, 10);

    document.body.style.marginTop = '';
    window.scrollTo({ left: window.scrollX, top: scrollTop, behavior: 'instant' });
  }
}
