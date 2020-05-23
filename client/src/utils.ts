import moment from "antd/node_modules/moment"
import { format as formatFns } from 'date-fns';
import { DATE_TIME_FORMAT } from "./constants"

export const getDateString = (date: string ): string => {
    // const dateMoment = formatFns(new Date(date), DATE_TIME_FORMAT)
    // console.log(dateMoment);
    
    return date;
}