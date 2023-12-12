import PodCard from "./cards/podcast/PodCard";

export interface Podcast {
  id: number;
  name: string;
  audio_preview_url: string;
  external_urls: ExternalUrls;
  release_date: string;
  description: string;
}

interface ExternalUrls {
  spotify: string;
}

const Pods = ({ pods }: { pods?: Podcast[] }) => {
  if (pods === undefined) {
    return <div>loading...</div>;
  }
  return (
    <ul className="relative z-10 list-none">
      {pods.map((pod) => {
        return (
          <li key={pod.id}>
            <PodCard podcast={pod} />
          </li>
        );
      })}
    </ul>
  );
};

export default Pods;
