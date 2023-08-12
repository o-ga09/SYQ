import { ComponentProps, forwardRef } from "react";

type TwitterIntentTweetProps = {
    text?: string;
    url?: string;
    hashtags?: string[];
  } & Omit<ComponentProps<"a">, "href" | "target" | "rel">;
  
export const TwitterShare = forwardRef<HTMLAnchorElement, TwitterIntentTweetProps>(
    (
      { text, url, hashtags, ...intrinsicProps },
      forwardedRef,
    ) => {
      const _url = new URL("https://twitter.com/intent/tweet");
  
      if (text !== undefined) _url.searchParams.set("text", text);
      if (url !== undefined) _url.searchParams.set("url", url);
      if (hashtags !== undefined) _url.searchParams.set("hashtags", hashtags.join(","));
  
      return (
        <a
          ref={forwardedRef}
          href={_url.toString()}
          target="_blank"
          rel="noopener noreferrer"
          {...intrinsicProps}
        />
      );
    },
  );