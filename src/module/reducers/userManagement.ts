import {createReducer} from 'redux-act';
import {
  addUserManagement,
  editUserManagement,
  toggleAddNewUser,
} from '../actions';
import cloneDeep from 'lodash/cloneDeep';
export interface ICheckedListProps {
  label: string;
  key: string;
  value: boolean;
}

export interface IUserManagement {
  email: string;
  name: string;
  checkedList: ICheckedListProps[];
  isMainUser: boolean;
}

export interface IUserManagementReducer {
  users: IUserManagement[];
  isAddUser: boolean;
}

const initialState: IUserManagementReducer = {
  users: [
    {
      name: 'Emily Jackson',
      email: 'emilyjackson298@gmail.com',
      checkedList: [
        {
          label: 'Add and manage users',
          key: 'addAndManageUser',
          value: true,
        },
        {
          label: 'Create and edit schedules',
          key: 'createAndEditSchedules',
          value: true,
        },
        {
          label: 'Override windows',
          key: 'overrideAllWindows',
          value: true,
        },
        {
          label: 'Configure apartment',
          key: 'configApartments',
          value: false,
        },
      ],
      isMainUser: true,
    },
    {
      name: 'Will Smith',
      email: 'willsmith99@gmail.com',
      checkedList: [
        {
          label: 'Add and manage users',
          key: 'addAndManageUser',
          value: false,
        },
        {
          label: 'Create and edit schedules',
          key: 'createAndEditSchedules',
          value: true,
        },
        {
          label: 'Override windows',
          key: 'overrideAllWindows',
          value: true,
        },
        {
          label: 'Configure apartment',
          key: 'configApartments',
          value: false,
        },
      ],
      isMainUser: false,
    },
    {
      name: 'Sara Jackson',
      email: 'saraJJJJJ99@gmail.com',
      checkedList: [
        {
          label: 'Add and manage users',
          key: 'addAndManageUser',
          value: false,
        },
        {
          label: 'Create and edit schedules',
          key: 'createAndEditSchedules',
          value: true,
        },
        {
          label: 'Override windows',
          key: 'overrideAllWindows',
          value: true,
        },
        {
          label: 'Configure apartment',
          key: 'configApartments',
          value: false,
        },
      ],
      isMainUser: false,
    },
    {
      name: 'Sara Jackson',
      email: 'saraJJJJ9@gmail.com',
      checkedList: [
        {
          label: 'Add and manage users',
          key: 'addAndManageUser',
          value: false,
        },
        {
          label: 'Create and edit schedules',
          key: 'createAndEditSchedules',
          value: true,
        },
        {
          label: 'Override windows',
          key: 'overrideAllWindows',
          value: true,
        },
        {
          label: 'Configure apartment',
          key: 'configApartments',
          value: false,
        },
      ],
      isMainUser: false,
    },
    {
      name: 'Sara Jackson',
      email: 'saraJJJJ9@gmail.com',
      checkedList: [
        {
          label: 'Add and manage users',
          key: 'addAndManageUser',
          value: false,
        },
        {
          label: 'Create and edit schedules',
          key: 'createAndEditSchedules',
          value: true,
        },
        {
          label: 'Override windows',
          key: 'overrideAllWindows',
          value: true,
        },
        {
          label: 'Configure apartment',
          key: 'configApartments',
          value: false,
        },
      ],
      isMainUser: false,
    },
    {
      name: 'Sara Jackson',
      email: 'saraJJ99@gmail.com',
      checkedList: [
        {
          label: 'Add and manage users',
          key: 'addAndManageUser',
          value: false,
        },
        {
          label: 'Create and edit schedules',
          key: 'createAndEditSchedules',
          value: true,
        },
        {
          label: 'Override windows',
          key: 'overrideAllWindows',
          value: true,
        },
        {
          label: 'Configure apartment',
          key: 'configApartments',
          value: false,
        },
      ],
      isMainUser: false,
    },
  ],
  isAddUser: false,
};

export const userManagement = createReducer<IUserManagementReducer>(
  {},
  initialState,
);
userManagement.on(
  addUserManagement,
  (state: IUserManagementReducer, payload: IUserManagement) => {
    const uData = cloneDeep(state.users);
    uData.push(payload);
    return {
      ...state,
      users: uData,
      isAddUser: false,
    };
  },
);
userManagement.on(
  editUserManagement,
  (state: IUserManagementReducer, payload: IUserManagement) => {
    const uData = cloneDeep(state.users);
    const currentUserIndex = uData.findIndex(x => x.email === payload.email);
    uData[currentUserIndex] = payload;
    return {
      ...state,
      users: uData,
    };
  },
);
userManagement.on(
  toggleAddNewUser,
  (state: IUserManagementReducer, payload: boolean) => ({
    ...state,
    isAddUser: payload,
  }),
);
