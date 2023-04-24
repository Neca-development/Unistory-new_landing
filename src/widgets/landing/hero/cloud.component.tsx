import React, { useEffect, useState } from "react";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";

type cloudType = 'cloud' | 'cloudEmpty'
type additionalIconType = 'lightning' | 'rainOne' | 'rainTwo' |'rainThree'
const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";
const CloudComponent = () => {
  const [cloudAnim, setCloudAnim] = useState({stage: 0, isPlay: false})
  const cloudName = (): {cloudType: cloudType, additionalIcon?: additionalIconType} => {
    switch (cloudAnim.stage) {
      case 1:
        return {
          cloudType: 'cloudEmpty',
          additionalIcon: 'lightning'
        }
      case 2:
        return {
          cloudType: 'cloudEmpty',
          additionalIcon: 'lightning'
        }
      case 3:
        return {
          cloudType: 'cloud',
        }
      case 4:
        return {
          cloudType: 'cloudEmpty',
          additionalIcon: 'rainOne'
        }
      case 5:
        return {
          cloudType: 'cloudEmpty',
          additionalIcon: 'rainTwo'
        }
      case 6:
        return {
          cloudType: 'cloudEmpty',
          additionalIcon: 'rainThree'
        }
      default:
        return {
          cloudType: 'cloud'
        }
    }
  }

  const toggleCloudAnim = () => {
    if(cloudAnim.isPlay) {
      setCloudAnim({stage: 0, isPlay: false})
      return
    }

    setCloudAnim({stage: 1, isPlay: true})
  }

  useEffect(() => {
    let interval: NodeJS.Timer
    if(cloudAnim.isPlay) {
      interval = setInterval(() => {
        setCloudAnim(prevState => ({
          stage: prevState.stage <= 6 ? prevState.stage + 1 : 1,
          isPlay: true
        }))
      }, 500)
    }

    return () => {
      clearInterval(interval)
    }
  }, [cloudAnim.isPlay])

  return (
    <button className="absolute -top-6 left-[18.2rem] w-10 p-2 t-xs:left-[7rem] t-xs:-top-10" onClick={toggleCloudAnim}>
      <IconComponent name={cloudName().cloudType} className={iconClassnameByTheme} />
      { cloudName().additionalIcon &&
        <IconComponent
          name={cloudName().additionalIcon!}
          className={clsx("absolute left-1/2", cloudName().additionalIcon === 'lightning' ? 'top-1/2 -translate-x-[45%]' : 'top-[70%] -translate-x-[40%]')}
        />
      }
      {
        cloudAnim.stage === 2 && <IconComponent name="light" className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4"/>
      }
    </button>
  );
};

export default CloudComponent;