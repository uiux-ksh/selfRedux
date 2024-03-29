import {RefObject,useEffect,useState} from "react";

function userInterfaceObserver(
    targetRef:RefObject<Element>,
    options:IntersectionObserverInit ={
        threshold:0,
        root:null,
        rootMargin:'0px'
    }
): IntersectionObserverEntry | undefined {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const [entry,setEntry] = useState<IntersectionObserverEntry>();

  const isIntersecting = entry?.isIntersecting;

  const updateEntry = (entries:IntersectionObserverEntry[]):void  => {
      const [entry] = entries;
      setEntry(entry);
  }

    // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
      const target = targetRef?.current;
      if(isIntersecting  || !target) return;

      const observer = new IntersectionObserver(updateEntry,options);

      observer.observe(target);

      return () => {
          observer.disconnect();
      }
  },[targetRef,options.root,options.rootMargin,options.threshold,isIntersecting]);

  return  entry;
}

export default  userInterfaceObserver;