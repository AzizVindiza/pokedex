import React, { lazy, Suspense } from 'react';

const LazyButton = lazy(() => import('./PokemonTypeCard'));
export interface PokemonCardProps {
    el : any;
    idx : number;
}
const Button = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & PokemonCardProps) => (
  <Suspense fallback={null}>
    <LazyButton {...props} />
  </Suspense>
);

export default Button;
