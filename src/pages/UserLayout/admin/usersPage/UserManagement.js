import React, { useState, useEffect } from "react";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Nguyễn Văn A", role: "Manager" },
    { id: 2, name: "Trần Thị B", role: "User" }
  ]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("User");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(0);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");
  const [isApiConnected, setIsApiConnected] = useState(false);

  useEffect(() => {
    // Giả lập gọi API
    setTimeout(() => {
      setIsApiConnected(true); // Set thành true nếu kết nối thành công
    }, 2000);
  }, []);

  const addUser = () => {
    if (name === "") return;
    const newUser = { id: users.length + 1, name: name, role: role };
    let newUsers = [];
    for (let i = 0; i < users.length; i++) {
      newUsers.push(users[i]);
    }
    newUsers.push(newUser);
    setUsers(newUsers);
    setName("");
    setRole("User");
  };

  const deleteUser = (id) => {
    let newUsers = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].id !== id) {
        newUsers.push(users[i]);
      }
    }
    setUsers(newUsers);
  };

  const startEdit = (user) => {
    setEditId(user.id);
    setEditName(user.name);
    setEditRole(user.role);
  };

  const saveEdit = () => {
    let newUsers = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === editId) {
        newUsers.push({ id: editId, name: editName, role: editRole });
      } else {
        newUsers.push(users[i]);
      }
    }
    setUsers(newUsers);
    setEditId(0);
    setEditName("");
    setEditRole("");
  };

  const countUsersByRole = (role) => {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].role === role) {
        count++;
      }
    }
    return count;
  };

  const searchUsers = () => {
    let filteredUsers = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].name.toLowerCase().includes(search.toLowerCase())) {
        filteredUsers.push(users[i]);
      }
    }
    return filteredUsers;
  };

  if (isApiConnected) {
    return (
      <div className="manage-user-management">
        <h2>Quản lý Người Dùng</h2>
        <p>Đang kết nối API thành công!</p>

        <div className="manage-add-user">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="User">User</option>
            <option value="Manager">Manager</option>
          </select>
          <button onClick={addUser}>Thêm</button>
        </div>

        <div className="manage-search-user">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm..."
          />
        </div>

        <p>
          Manager: {countUsersByRole("Manager")} | User:{" "}
          {countUsersByRole("User")}
        </p>

        <ul className="manage-user-list">
          {searchUsers().map((user) => {
            if (editId === user.id) {
              return (
                <li key={user.id}>
                  <div>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                    <select
                      value={editRole}
                      onChange={(e) => setEditRole(e.target.value)}
                    >
                      <option value="User">User</option>
                      <option value="Manager">Manager</option>
                    </select>
                    <button onClick={saveEdit}>Lưu</button>
                    <button onClick={() => setEditId(0)}>Hủy</button>
                  </div>
                </li>
              );
            } else {
              return (
                <li key={user.id}>
                  <div>
                    <span>
                      {user.name} - {user.role}
                    </span>
                    <button onClick={() => startEdit(user)}>Sửa</button>
                    <button onClick={() => deleteUser(user.id)}>Xóa</button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="manage-user-management">
        <h2>Quản lý Người Dùng</h2>
        <p>Không kết nối được với API, sử dụng dữ liệu mặc định.</p>

        <div className="manage-add-user">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="User">User</option>
            <option value="Manager">Manager</option>
          </select>
          <button onClick={addUser}>Thêm</button>
        </div>

        <div className="manage-search-user">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm..."
          />
        </div>

        <p>
          Manager: {countUsersByRole("Manager")} | User:{" "}
          {countUsersByRole("User")}
        </p>

        <ul className="manage-user-list">
          {searchUsers().map((user) => {
            if (editId === user.id) {
              return (
                <li key={user.id}>
                  <div>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                    <select
                      value={editRole}
                      onChange={(e) => setEditRole(e.target.value)}
                    >
                      <option value="User">User</option>
                      <option value="Manager">Manager</option>
                    </select>
                    <button onClick={saveEdit}>Lưu</button>
                    <button onClick={() => setEditId(0)}>Hủy</button>
                  </div>
                </li>
              );
            } else {
              return (
                <li key={user.id}>
                  <div>
                    <span>
                      {user.name} - {user.role}
                    </span>
                    <button onClick={() => startEdit(user)}>Sửa</button>
                    <button onClick={() => deleteUser(user.id)}>Xóa</button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
};

export default UserManagement;
