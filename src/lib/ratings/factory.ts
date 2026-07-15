import type { Profile } from '../../data/profile';
import type { RatingProvider } from './provider';
import { makeLichessProvider } from './lichess';
import { makeFideProvider } from './fide-static';

export function makeProviders(profile: Profile): RatingProvider[] {
  return [
    makeFideProvider(profile.fide.standard),
    makeLichessProvider(profile.lichessHandle, profile.lichessFallback),
  ];
}
