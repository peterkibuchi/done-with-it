import Bugsnag from "@bugsnag/expo";

const log = (error) => {
  return __DEV__ ? console.log(error) : Bugsnag.notify(error);
};

const start = () => Bugsnag.start();

export default { log, start };
