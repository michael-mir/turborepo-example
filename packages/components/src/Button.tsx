import type { ComponentPropsWithoutRef, FC } from 'react';
import React from 'react';

export const Button: FC<ComponentPropsWithoutRef<'button'>> = () => (
  <button type='button' onClick={() => alert('boop')}>
    Boop
  </button>
);
