import useData from "./useData";

export interface Podcast {
    id: number;
    name: string;
    description: string;
}



const usePodcasts = () => {
    const {data:games, error, isLoading} = useData<Podcast>('/shows/1Q6JuUv6QxYgR12C67EPYb/episodes', {}, [])

    return {games, error, isLoading};
}

export default usePodcasts;