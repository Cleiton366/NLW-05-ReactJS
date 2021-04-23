import { createContext } from 'react';

interface IEpisode {
    id: string;
    title: string;
    thumbnail: string;
    duration: number;
    url: string;
    members: string;
}

interface IPlayerContext {
    episodeList: Array<IEpisode>
    currentEpisodeIndex: number;
    isPlaying: boolean;
    play: (episode: IEpisode) => void;
    togglePlay: () => void;
    setPlayingState: (state: boolean) => void;
}
export const PlayerContext = createContext({} as IPlayerContext);


