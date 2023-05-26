import React, { useEffect, useState } from "react";
import { IconComponent } from "@shared/ui";
import clsx from "clsx";

type cloudType = 'cloud' | 'cloudEmpty'
type additionalIconType = 'lightning' | 'rainOne' | 'rainTwo' |'rainThree'
const iconClassnameByTheme =
  "first:dark:[&>*]:stroke-icon-on-primary first:[&>path]:stroke-icon-accent";
const CloudComponent = () => {
  const [cloudAnim, setCloudAnim] = useState({stage: 4, isPlay: false})
  const cloudName = (): {cloudType: cloudType, additionalIcon?: additionalIconType, isPuddle?: boolean} => {
    switch (cloudAnim.stage) {
      case 1:
        return {
          cloudType: 'cloudEmpty',
          additionalIcon: 'lightning',
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
          additionalIcon: 'rainOne',
          isPuddle: true
        }
      case 5:
        return {
          cloudType: 'cloudEmpty',
          additionalIcon: 'rainTwo',
          isPuddle: true
        }
      case 6:
        return {
          cloudType: 'cloudEmpty',
          additionalIcon: 'rainThree',
          isPuddle: true
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

  const scaleClass = () => {
    switch (cloudAnim.stage) {
      case 5:
        return 'scale-[1.2]'
      case 6:
        return 'scale-[1.4]'
      default:
        return ''
    }
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
    <button className="absolute -top-6 left-[18.2rem] p-2 t-xs:left-[7rem] t-xs:-top-10 justify-center items-center flex" onClick={toggleCloudAnim}>
      <IconComponent name={cloudName().cloudType} className={iconClassnameByTheme} />
      { cloudName().additionalIcon &&
        <IconComponent
          name={cloudName().additionalIcon!}
          className={
          clsx(
            "absolute",
            cloudName().additionalIcon === 'lightning' ? `top-1/2 ${iconClassnameByTheme}` : 'top-[70%]',
          )
        }
        />
      }
      {
        cloudName().isPuddle &&
        <IconComponent
          name="puddle"
          className={
            clsx(
              "absolute top-full mt-1.5",
              scaleClass()
            )
          }
        />
      }
      {
        cloudAnim.stage === 2 && <IconComponent name="light" className="absolute"/>
      }
    </button>
  );
};

export default CloudComponent;