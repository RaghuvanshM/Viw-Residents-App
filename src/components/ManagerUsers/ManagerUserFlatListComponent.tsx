import React, {Fragment, useState} from 'react';
import ManageUserCard from './ManageUserCard';
import AddEditUser from './AddEditUser';

interface ItemProps {
  name: string;
  email: string;
  checkedList: {
    label: string;
    key: string;
    value: boolean;
  }[];
  isMainUser: boolean;
}
interface AddEditUserProps {
  saveUserData: (prevState: any) => void;
  userData: ItemProps;
  isLastElement: boolean;
  tabHeight: number;
}
const ManagerUserFlatListComponent: React.FC<AddEditUserProps> = ({
  isLastElement,
  userData,
  saveUserData,
  tabHeight,
}) => {
  const [editMode, setEditMode] = useState(false);
  const SaveData = (data: any) => {
    console.log(data);
    setEditMode(false);
    saveUserData(data);
  };
  return (
    <Fragment>
      {editMode ? (
        <AddEditUser
          isCreate={false}
          userData={userData}
          toggleAddEdit={() => {
            console.log("I'm Pressed");
            setEditMode(false);
          }}
          saveUserData={SaveData}
        />
      ) : (
        <ManageUserCard
          name={userData.name}
          email={userData.email}
          checkedList={userData.checkedList}
          isMainUser={userData.isMainUser}
          onEdit={() => setEditMode(true)}
          isLastElement={isLastElement}
          lastElementHeight={tabHeight}
        />
      )}
    </Fragment>
  );
};
export default ManagerUserFlatListComponent;
