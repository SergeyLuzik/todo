// This file serves as a central hub for re-exporting pre-typed Redux hooks.
// These imports are restricted elsewhere to ensure consistent
// usage of typed hooks throughout the application.
// We disable the ESLint rule here because this is the designated place
// for importing and re-exporting the typed versions of hooks.
/* eslint-disable no-restricted-imports */
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { useEffect, useState } from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useRootNode = (nodeId: string) => {
  const [node, setNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let rootNode = document.getElementById(nodeId);

    if (!rootNode) {
      rootNode = document.createElement('div');
      rootNode.id = nodeId;
      document.body.appendChild(rootNode);
    }

    setNode(rootNode);
  }, [nodeId]);

  return node;
};
