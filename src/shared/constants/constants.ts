import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export const SIDEBAR_MENU_ITEMS = [
  { value: "dashBoard", label: "대시보드", icon: DashboardIcon },
  { value: "account", label: "계좌 목록", icon: AccountBalanceIcon },
  { value: "user", label: "사용자", icon: PersonIcon },
  { value: "logout", label: "로그아웃", icon: LogoutIcon },
];
