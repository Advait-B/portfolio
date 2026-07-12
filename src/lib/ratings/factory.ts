import type { Profile } from '../../data/profile';
import type { RatingProvider } from './provider';
import { makeLichessProvider } from './lichess';
import { makeFideProvider } from './fide-static';

export function makeProviders(profile: Profile): RatingProvider[] {
  return [
    makeLichessProvider(profile.lichessHandle, profile.lichessFallback),
    makeFideProvider(profile.fide.standard),
  ];
}
