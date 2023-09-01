import React from "react";

const Podcast = () => {
  return (
    <div className="max-w-4xl grid grid-col-1 mx-auto p-5 ">
      <iframe
        src="https://embed.podcasts.apple.com/us/podcast/byron-burnetts-podcast/id1640041573?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
        className="bg-transparent w-full overflow-hidden "
        title="Hoopnomics-Podcast"
        height="450px"
        frameborder="0"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        allow="autoplay *; encrypted-media *; clipboard-write"
      >
        {" "}
      </iframe>
    </div>
  );
};

export default Podcast;
