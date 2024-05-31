import moment from "moment";
export function getWeekDay(date: Date | moment.Moment | string) {
  const weekDays = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  return weekDays[moment(date).day()]
}