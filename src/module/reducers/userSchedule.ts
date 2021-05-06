import {createReducer} from 'redux-act';
import {addSchedule} from '../actions';
import cloneDeep from 'lodash/cloneDeep';
export interface ICheckListProps {
  label: string;
  key: string;
  value: boolean;
}
export interface IDaysListProps {
  label: string;
  key: string;
  value: boolean;
}

export interface IScheduleManagement {
  ScheduleName: string;
  time: string;
  Repeat: string;
  days: IDaysListProps[];
  checkedList: ICheckListProps[];
  tintcolor: string;
}

export interface IScheduleManagementReducer {
  users: IScheduleManagement[];
}

const initialState: IScheduleManagementReducer = {
  users: [
    {
      ScheduleName: 'Weekday Wake Up',
      time: '6:30am - 7:30am',
      Repeat: 'Repeat Weekly',
      days: [
        {
          label: 'Sun',
          key: 'sun',
          value: true,
        },
        {
          label: 'Mon',
          key: 'mon',
          value: true,
        },
        {
          label: 'Tue',
          key: 'tue',
          value: true,
        },
        {
          label: 'Wed',
          key: 'wed',
          value: false,
        },
        {
          label: 'Thu',
          key: 'thu',
          value: true,
        },
        {
          label: 'Fri',
          key: 'fri',
          value: true,
        },
        {
          label: 'Sat',
          key: 'sat',
          value: true,
        },
      ],
      checkedList: [
        {
          label: 'Main Bedroom',
          key: 'mainbedroom',
          value: true,
        },
        {
          label: 'Living Room',
          key: 'livingroom',
          value: true,
        },
      ],
      tintcolor: 'Clear Tint',
    },
    {
      ScheduleName: 'Weekday Wake Up',
      time: '6:30am - 7:30am',
      Repeat: 'Repeat Weekly',
      days: [
        {
          label: 'Sun',
          key: 'sun',
          value: true,
        },
        {
          label: 'Mon',
          key: 'mon',
          value: true,
        },
        {
          label: 'Tue',
          key: 'tue',
          value: false,
        },
        {
          label: 'Wed',
          key: 'wed',
          value: false,
        },
        {
          label: 'Thu',
          key: 'thu',
          value: false,
        },
        {
          label: 'Fri',
          key: 'fri',
          value: true,
        },
        {
          label: 'Sat',
          key: 'sat',
          value: false,
        },
      ],
      checkedList: [
        {
          label: 'Main Bedroom',
          key: 'mainbedroom',
          value: true,
        },
        {
          label: 'Living Room',
          key: 'livingroom',
          value: true,
        },
      ],
      tintcolor: 'Clear Tint',
    },
    {
      ScheduleName: 'Weekday Wake Up',
      time: '6:30am - 7:30am',
      Repeat: 'Repeat Weekly',
      days: [
        {
          label: 'Sun',
          key: 'sun',
          value: true,
        },
        {
          label: 'Mon',
          key: 'mon',
          value: true,
        },
        {
          label: 'Tue',
          key: 'tue',
          value: false,
        },
        {
          label: 'Wed',
          key: 'wed',
          value: false,
        },
        {
          label: 'Thu',
          key: 'thu',
          value: false,
        },
        {
          label: 'Fri',
          key: 'fri',
          value: true,
        },
        {
          label: 'Sat',
          key: 'sat',
          value: false,
        },
      ],
      checkedList: [
        {
          label: 'Main Bedroom',
          key: 'mainbedroom',
          value: true,
        },
        {
          label: 'Living Room',
          key: 'livingroom',
          value: true,
        },
      ],
      tintcolor: 'Clear Tint',
    },
    {
      ScheduleName: 'Weekday Wake Up',
      time: '6:30am - 7:30am',
      Repeat: 'Repeat Weekly',
      days: [
        {
          label: 'Sun',
          key: 'sun',
          value: true,
        },
        {
          label: 'Mon',
          key: 'mon',
          value: true,
        },
        {
          label: 'Tue',
          key: 'tue',
          value: false,
        },
        {
          label: 'Wed',
          key: 'wed',
          value: false,
        },
        {
          label: 'Thu',
          key: 'thu',
          value: false,
        },
        {
          label: 'Fri',
          key: 'fri',
          value: true,
        },
        {
          label: 'Sat',
          key: 'sat',
          value: false,
        },
      ],
      checkedList: [
        {
          label: 'Main Bedroom',
          key: 'mainbedroom',
          value: true,
        },
        {
          label: 'Living Room',
          key: 'livingroom',
          value: true,
        },
      ],
      tintcolor: 'Clear Tint',
    },
    {
      ScheduleName: 'Weekday Wake Up',
      time: '6:30am - 7:30am',
      Repeat: 'Repeat Weekly',
      days: [
        {
          label: 'Sun',
          key: 'sun',
          value: true,
        },
        {
          label: 'Mon',
          key: 'mon',
          value: true,
        },
        {
          label: 'Tue',
          key: 'tue',
          value: false,
        },
        {
          label: 'Wed',
          key: 'wed',
          value: false,
        },
        {
          label: 'Thu',
          key: 'thu',
          value: false,
        },
        {
          label: 'Fri',
          key: 'fri',
          value: true,
        },
        {
          label: 'Sat',
          key: 'sat',
          value: false,
        },
      ],
      checkedList: [
        {
          label: 'Main Bedroom',
          key: 'mainbedroom',
          value: true,
        },
        {
          label: 'Living Room',
          key: 'livingroom',
          value: true,
        },
      ],
      tintcolor: 'Clear Tint',
    },
  ],
};
export const userSchedule = createReducer<IScheduleManagementReducer>(
  {},
  initialState,
);
userSchedule.on(
  addSchedule,
  (state: IScheduleManagementReducer, payload: IScheduleManagement) => {
    const uData = cloneDeep(state.users);
    uData.push(payload);
    return {
      ...state,
      users: uData,
      isAddUser: false,
    };
  },
);
