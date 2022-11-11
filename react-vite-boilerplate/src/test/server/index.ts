export const initMocks = (): void => {
  if (typeof window === 'undefined') {
    import('./server').then((module) => {
      module.server.listen({ onUnhandledRequest: 'bypass' });
    });
  } else {
    import('./browser').then((module) => {
      module.worker.start({ onUnhandledRequest: 'bypass' });
    });
  }
};
