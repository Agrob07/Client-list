import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./TableLIst";
import Loading from "./Loading";
import Tooltip from "./Tooltip";
import Notification from "./Notificathion";
import CreateUserModal from "./CreateUserModal";
import { fetchData } from "../app/actions/getActions";
import { deleteData } from "../app/actions/deleteActions";
import {
  selectUserState,
  selectisDataLoading,
  selectisDataSuccess,
} from "../app/features/clientDataSlice";
import {
  selectisDeleteClientList,
  selectIsDeleteLoading,
  selectisDeleteSuccess,
} from "../app/features/deleteDataSlice";
import {
  selectIsCreateClientList,
  selectIsCreateLoading,
  selectIsCretaeSuccess,
} from "../app/features/createDataSLice";
import {
  selectisEditclientsList,
  selectisEditLoading,
  selectisEditSuccess,
} from "../app/features/editDataSlice";

const curState = {
  id: null,
  option: "",
};

const ClientList = () => {
  const [showForm, setShowForm] = useState(false);
  const [control, setControl] = useState(curState);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const list = useSelector(selectUserState);
  const isGetLoading = useSelector(selectisDataLoading);
  const isGetSuccess = useSelector(selectisDataSuccess);

  const IsDeletetedLoading = useSelector(selectIsDeleteLoading);
  const IsDeletetedSuccess = useSelector(selectisDeleteSuccess);

  const isCreateLoading = useSelector(selectIsCreateLoading);
  const IsCreateSuccess = useSelector(selectIsCretaeSuccess);

  const isEditLoading = useSelector(selectisEditLoading);
  const IsEditSuccess = useSelector(selectisEditSuccess);

  const editList = useSelector(selectisEditclientsList);
  const deleteList = useSelector(selectisDeleteClientList);
  const createList = useSelector(selectIsCreateClientList);

  console.log({ list, editList, deleteList, createList });

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  const prevIsDeletetedLoading = usePrevious(IsDeletetedLoading);
  const prevIsCreateLoading = usePrevious(isCreateLoading);
  const prevIsEditLoading = usePrevious(isEditLoading);

  useEffect(() => {
    if (
      (!isGetLoading && !isGetSuccess) ||
      (prevIsDeletetedLoading && IsDeletetedSuccess) ||
      (prevIsCreateLoading && IsCreateSuccess) ||
      (prevIsEditLoading && IsEditSuccess)
    ) {
      dispatch(fetchData());
    }
  }, [
    IsCreateSuccess,
    IsDeletetedSuccess,
    IsEditSuccess,
    dispatch,
    isGetLoading,
    isGetSuccess,
    prevIsCreateLoading,
    prevIsDeletetedLoading,
    prevIsEditLoading,
  ]);

  const filteredList = useMemo(() => {
    return list
      ? list.filter((item) => {
          return item.id !== control.id;
        })
      : [];
  }, [control.id, list]);

  const handleCLick = (control) => {
    dispatch(deleteData({ data: filteredList, id: control.id }));
  };

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "USERNAME",
      accessor: "username",
    },
    {
      Header: "NAME",
      accessor: "name",
    },
    {
      Header: "PASSWORD",
      accessor: "password",
    },
    {
      Header: "ACTION",
      accessor: "action",
      Cell: (cell) => (
        <div className="flex flex-col gap-2">
          <button
            className="focus:outline-none focus:ring-2 focus:ring-offset-2
     focus:ring-indigo-600 mx-auto transition duration-150 ease-in-out
     hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
            onClick={() => {
              setControl({ id: cell.row.original.id, option: "edit" });
              setShowForm(true);
            }}
          >
            Edit
          </button>

          <button
            onClick={() => {
              setShow(true);
              setControl({ id: cell.row.original.id });
            }}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-600 mx-auto transition duration-150 ease-in-out
          hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      {isGetSuccess && !isGetLoading ? (
        <Table data={list} columns={columns} />
      ) : !isGetSuccess && isGetLoading ? (
        <Loading />
      ) : (
        <Notification />
      )}

      <Tooltip
        setShow={setShow}
        show={show}
        deleteRow={handleCLick}
        rowProps={control}
      />

      <button
        className=" my-12 focus:outline-none focus:ring-2 focus:ring-offset-2 m y
   focus:ring-indigo-600 mx-auto transition duration-150 ease-in-out
   hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
        onClick={() => {
          setShowForm(true);
          setControl({ option: "create" });
        }}
      >
        Create User
      </button>

      <CreateUserModal
        data={list}
        control={control}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </>
  );
};

export default ClientList;
