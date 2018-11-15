import * as React from 'react';

function getInitialValue(key: string, initialValue?: any) {
  const storedValue = localStorage.getItem(key);
  if (storedValue) {
    return JSON.parse(storedValue);
  } else {
    return initialValue || null;
  }
}

function useStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [value, onChange]: [T, (value: T) => void] = React.useState(
    getInitialValue(key, initialValue)
  );

  function listenToStorage(event: StorageEvent) {
    if (event.key === key) {
      const newValue = JSON.parse(event.newValue || '');
      onChange(newValue);
    }
  }

  function listenToLocal(event: Event) {
    const newValue: T = event['newValue'];
    if (value !== newValue) {
      onChange(newValue);
    }
  }

  function setValue(newValue: T) {
    onChange(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    window.dispatchEvent(
      new Event(`storage:${key}`, {
        key,
        oldValue: value,
        newValue
      } as any)
    );
  }

  React.useEffect(() => {
    window.addEventListener('storage', listenToStorage);
    window.addEventListener(`storage:${key}`, listenToLocal);
    if (value === undefined) {
      onChange(getInitialValue(key, initialValue));
    }
    return () => {
      window.removeEventListener('storage', listenToStorage);
      window.removeEventListener(`storage:${key}`, listenToLocal);
    };
  });

  return [value || initialValue, setValue];
}

export default useStorage;
