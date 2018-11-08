const isRenderer = () => {
  // running in a web browser
  if (typeof process === 'undefined') return false;

  // node-integration is disabled
  if (!process) return false;

  // We're in node.js somehow
  if (!process['platform']) return false;

  return process['platform'] === 'win32';
};

export default isRenderer();
