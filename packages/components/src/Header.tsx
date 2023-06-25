import type { FC } from 'react';
import React from 'react';

export interface HeaderProps {
  text: string;
}

export const Header: FC<HeaderProps> = ({ text }) => <h1>{text}</h1>;
