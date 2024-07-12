import {
  BoltIcon,
  CloudIcon,
  FaceSmileIcon,
  FireIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";

const TypesComponents: any = {
  Fire: (props: any) => (
    <FireIcon className="h-5 w-5 text-orange-500" {...props} />
  ),
  Water: (props: any) => (
    <CloudIcon className="h-5 w-5 text-blue-500" {...props} />
  ),
  Grass: (props: any) => (
    <SparklesIcon className="h-5 w-5 text-green-500" {...props} />
  ),
  Electric: (props: any) => (
    <BoltIcon className="h-5 w-5 text-yellow-500" {...props} />
  ),
  Lightning: (props: any) => (
    <BoltIcon className="h-5 w-5 text-yellow-500" {...props} />
  ),
  Darkness: (props: any) => (
    <LightBulbIcon className="h-5 w-5 text-yellow-500" {...props} />
  ),
  Colorless: (props: any) => (
    <LightBulbIcon className="h-5 w-5 text-yellow-500" {...props} />
  ),
  Psychic: (props: any) => (
    <FaceSmileIcon className="h-5 w-5 text-purple-500" {...props} />
  ),
  default: (props: any) => (
    <RocketLaunchIcon className="h-5 w-5 text-purple-500" {...props} />
  ),
};

const TypeIcon = ({type, ...props}: any) => {
  const TypeComponent = TypesComponents[type] || TypesComponents.default;
  return <TypeComponent />;
};

export default TypeIcon;
