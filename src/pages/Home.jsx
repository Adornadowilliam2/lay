import { useState, useRef, useEffect } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Divider,
  Checkbox,
  Grid,
  FormHelperText,
  Icon,
  Tab,
} from "@mui/material";

import { Close, Menu } from "@mui/icons-material";
import { CSSTransition } from "react-transition-group";


import "react-calendar/dist/Calendar.css";

import dayjs from "dayjs";
import { toast } from "react-toastify";
import "react-calendar/dist/Calendar.css";


import Calendar from "react-calendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

import { ExpandMore, ExpandLess } from "@mui/icons-material";
export default function Home() {
      const tileContent = ({ date, view }) => {
    const dateString = date.toISOString().split("T")[0]; // Get ISO date (YYYY-MM-DD)
    if (bookedDates.has(dateString)) {
      return (
        <Box
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        />
      );
    }
    return null;
    };
    
    
  const handleRowToggle = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };
  const handleBookingChange = (event) => {
    const { name, value } = event.target;
    setNewBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
    };
const rooms = [
  {
    id: 1,
    room_name: "Room 1",
    room_type_id: 1,
    location: "Building A, Floor 1",
    description: "A small meeting room with seating for 10.",
    capacity: 10,
  },
  {
    id: 2,
    room_name: "Room 2",
    room_type_id: 2,
    location: "Building A, Floor 2",
    description: "A conference room with large table for 20.",
    capacity: 20,
  },
  {
    id: 3,
    room_name: "Room 3",
    room_type_id: 1,
    location: "Building B, Floor 1",
    description: "A quiet room with seating for 8.",
    capacity: 8,
  },
  {
    id: 4,
    room_name: "Room 4",
    room_type_id: 3,
    location: "Building B, Floor 2",
    description: "A lecture hall with seating for 50.",
    capacity: 50,
  },
  {
    id: 5,
    room_name: "Room 5",
    room_type_id: 2,
    location: "Building C, Floor 1",
    description: "A large conference room with seating for 30.",
    capacity: 30,
  },
  {
    id: 6,
    room_name: "Room 6",
    room_type_id: 1,
    location: "Building C, Floor 2",
    description: "A small team collaboration space with seating for 6.",
    capacity: 6,
  },
  {
    id: 7,
    room_name: "Room 7",
    room_type_id: 3,
    location: "Building D, Floor 1",
    description: "An auditorium with seating for 100.",
    capacity: 100,
  },
  {
    id: 8,
    room_name: "Room 8",
    room_type_id: 1,
    location: "Building D, Floor 2",
    description: "A small meeting room with seating for 12.",
    capacity: 12,
  },
  {
    id: 9,
    room_name: "Room 9",
    room_type_id: 2,
    location: "Building E, Floor 1",
    description: "A medium-sized conference room with seating for 25.",
    capacity: 25,
  },
  {
    id: 10,
    room_name: "Room 10",
    room_type_id: 1,
    location: "Building E, Floor 2",
    description: "A quiet workroom with seating for 5.",
    capacity: 5,
  },
];
  const handleDaySelection = (event) => {
    const { value } = event.target;
    setNewBooking((prev) => ({
      ...prev,
      daysOfWeek: value,
    }));
    };
const subjects = [
  {
    id: 1,
    subject_name: "Mathematics",
    subject_type: "MATH101",
    created_at: "2022-01-01",
    updated_at: "2022-01-01",
  },
  {
    id: 2,
    subject_name: "Physics",
    subject_type: "PHYS102",
    created_at: "2022-02-01",
    updated_at: "2022-02-01",
  },
  {
    id: 3,
    subject_name: "Chemistry",
    subject_type: "CHEM103",
    created_at: "2022-03-01",
    updated_at: "2022-03-01",
  },
  {
    id: 4,
    subject_name: "Biology",
    subject_type: "BIO104",
    created_at: "2022-04-01",
    updated_at: "2022-04-01",
  },
  {
    id: 5,
    subject_name: "English Literature",
    subject_type: "ENG105",
    created_at: "2022-05-01",
    updated_at: "2022-05-01",
  },
  {
    id: 6,
    subject_name: "History",
    subject_type: "HIST106",
    created_at: "2022-06-01",
    updated_at: "2022-06-01",
  },
  {
    id: 7,
    subject_name: "Geography",
    subject_type: "GEO107",
    created_at: "2022-07-01",
    updated_at: "2022-07-01",
  },
  {
    id: 8,
    subject_name: "Computer Science",
    subject_type: "CS108",
    created_at: "2022-08-01",
    updated_at: "2022-08-01",
  },
  {
    id: 9,
    subject_name: "Economics",
    subject_type: "ECO109",
    created_at: "2022-09-01",
    updated_at: "2022-09-01",
  },
  {
    id: 10,
    subject_name: "Philosophy",
    subject_type: "PHIL110",
    created_at: "2022-10-01",
    updated_at: "2022-10-01",
  },
];

  const [newBooking, setNewBooking] = useState({
    roomId: "",
    subjectId: "",
    sectionId: "",
    startTime: dayjs().startOf("hour"),
    endTime: dayjs().add(1, "hour"),
    daysOfWeek: [],
    date_from: "",
    date_until: "",
  });
  const handleStartTimeChange = (newValue) => {
    setNewBooking((prev) => ({
      ...prev,
      startTime: newValue,
    }));
  };

  const handleEndTimeChange = (newValue) => {
    setNewBooking((prev) => ({
      ...prev,
      endTime: newValue,
    }));
  };
  const handleAddBooking = () =>{}
    const theme = useTheme();
const bookings = [
  {
    id: 1,
    user_id: 1,
    room_id: 1,
    subject: "Meeting",
    start_time: "10:00",
    end_time: "11:00",
    day_of_week: "Monday",
    status: "pending",
    book_until: "2023-12-31",
    book_from: "2023-12-31",
    subject_id: 1,
    section_id: 1,
    users: {
      name: "John Doe",
      email: "K0f7F@example.com",
      password: "password123",
      password_confirmation: "password123",
      role: "admin",
    },
    rooms: {
      room_name: "Room 1",
      room_type_id: 1,
      location: "Building A",
      description: "This is room 1",
      capacity: 10,
      image: null,
    },
    subjects: {
      subject_name: "Mathematics",
    },
    sections: {
      section_name: "Section A",
    },
  },
  {
    id: 2,
    user_id: 2,
    room_id: 2,
    subject: "Conference",
    start_time: "09:00",
    end_time: "12:00",
    day_of_week: "Tuesday",
    status: "confirmed",
    book_until: "2023-12-31",
    book_from: "2023-12-31",
    subject_id: 2,
    section_id: 2,
    users: {
      name: "Jane Smith",
      email: "JS123@example.com",
      password: "password456",
      password_confirmation: "password456",
      role: "user",
    },
    rooms: {
      room_name: "Room 2",
      room_type_id: 2,
      location: "Building B",
      description: "A spacious conference room",
      capacity: 25,
      image: null,
    },
    subjects: {
      subject_name: "Physics",
    },
    sections: {
      section_name: "Section B",
    },
  },
  {
    id: 3,
    user_id: 3,
    room_id: 3,
    subject: "Training",
    start_time: "14:00",
    end_time: "16:00",
    day_of_week: "Wednesday",
    status: "pending",
    book_until: "2023-12-31",
    book_from: "2023-12-31",
    subject_id: 3,
    section_id: 3,
    users: {
      name: "Michael Brown",
      email: "MB789@example.com",
      password: "password789",
      password_confirmation: "password789",
      role: "user",
    },
    rooms: {
      room_name: "Room 3",
      room_type_id: 3,
      location: "Building C",
      description: "Training room for workshops",
      capacity: 15,
      image: null,
    },
    subjects: {
      subject_name: "Chemistry",
    },
    sections: {
      section_name: "Section C",
    },
  },
  {
    id: 4,
    user_id: 4,
    room_id: 4,
    subject: "Interview",
    start_time: "11:00",
    end_time: "12:30",
    day_of_week: "Thursday",
    status: "confirmed",
    book_until: "2023-12-31",
    book_from: "2023-12-31",
    subject_id: 4,
    section_id: 4,
    users: {
      name: "Sara Johnson",
      email: "SJ456@example.com",
      password: "password101",
      password_confirmation: "password101",
      role: "admin",
    },
    rooms: {
      room_name: "Room 4",
      room_type_id: 4,
      location: "Building D",
      description: "Small room for one-on-one meetings",
      capacity: 5,
      image: null,
    },
    subjects: {
      subject_name: "Biology",
    },
    sections: {
      section_name: "Section D",
    },
  },
  {
    id: 5,
    user_id: 5,
    room_id: 5,
    subject: "Team Building",
    start_time: "13:00",
    end_time: "15:00",
    day_of_week: "Friday",
    status: "pending",
    book_until: "2023-12-31",
    book_from: "2023-12-31",
    subject_id: 5,
    section_id: 5,
    users: {
      name: "David Lee",
      email: "DL234@example.com",
      password: "password234",
      password_confirmation: "password234",
      role: "user",
    },
    rooms: {
      room_name: "Room 5",
      room_type_id: 5,
      location: "Building E",
      description: "Room for group activities and team building",
      capacity: 20,
      image: null,
    },
    subjects: {
      subject_name: "English Literature",
    },
    sections: {
      section_name: "Section E",
    },
  },
  {
    id: 6,
    user_id: 6,
    room_id: 6,
    subject: "Webinar",
    start_time: "10:00",
    end_time: "12:00",
    day_of_week: "Monday",
    status: "confirmed",
    book_until: "2023-12-31",
    book_from: "2023-12-31",
    subject_id: 6,
    section_id: 6,
    users: {
      name: "Emily Clark",
      email: "EC567@example.com",
      password: "password567",
      password_confirmation: "password567",
      role: "admin",
    },
    rooms: {
      room_name: "Room 6",
      room_type_id: 6,
      location: "Building F",
      description: "Room equipped for webinars",
      capacity: 30,
      image: null,
    },
    subjects: {
      subject_name: "History",
    },
    sections: {
      section_name: "Section F",
    },
  },
  {
    id: 7,
    user_id: 7,
    room_id: 7,
    subject: "Seminar",
    start_time: "15:00",
    end_time: "17:00",
    day_of_week: "Tuesday",
    status: "confirmed",
    book_until: "2023-12-31",
    book_from: "2023-12-31",
    subject_id: 7,
    section_id: 7,
    users: {
      name: "James Taylor",
      email: "JT890@example.com",
      password: "password890",
      password_confirmation: "password890",
      role: "user",
    },
    rooms: {
      room_name: "Room 7",
      room_type_id: 7,
      location: "Building G",
      description: "Room for hosting seminars",
      capacity: 40,
      image: null,
    },
    subjects: {
      subject_name: "Geography",
    },
    sections: {
      section_name: "Section G",
    },
  },
  {
    id: 8,
    user_id: 8,
    room_id: 8,
    subject: "Workshop",
    start_time: "09:30",
    end_time: "11:30",
    day_of_week: "Wednesday",
    status: "pending",
    book_until: "2023-12-31",
    book_from: "2023-12-31",
    subject_id: 8,
    section_id: 8,
    users: {
      name: "Olivia Wilson",
      email: "OW234@example.com",
      password: "password234",
      password_confirmation: "password234",
      role: "user",
    },
    rooms: {
      room_name: "Room 8",
      room_type_id: 8,
      location: "Building H",
      description: "Room for hands-on workshops",
      capacity: 35,
      image: null,
    },
    subjects: {
      subject_name: "Computer Science",
    },
    sections: {
      section_name: "Section H",
    },
  },
  {
    id: 9,
    user_id: 9,
    room_id: 9,
    subject: "Product Launch",
    start_time: "16:00",
    end_time: "18:00",
    day_of_week: "Thursday",
    status: "confirmed",
    book_until: "2023-12-31",
    book_from: "2023-12-31",
    subject_id: 9,
    section_id: 9,
    users: {
      name: "Benjamin White",
      email: "BW567@example.com",
      password: "password567",
      password_confirmation: "password567",
      role: "admin",
    },
    rooms: {
      room_name: "Room 9",
      room_type_id: 9,
      location: "Building I",
      description: "Room for product launches",
      capacity: 50,
      image: null,
    },
    subjects: {
      subject_name: "Economics",
    },
    sections: {
      section_name: "Section I",
    },
  },
  {
    id: 10,
    user_id: 10,
    room_id: 10,
    subject: "Strategy Meeting",
    start_time: "11:30",
    end_time: "13:00",
    day_of_week: "Friday",
    status: "confirmed",
    book_until: "2023-12-31",
    book_from: "2023-12-31",
    subject_id: 10,
    section_id: 10,
    users: {
      name: "Charlotte Miller",
      email: "CM678@example.com",
      password: "password678",
      password_confirmation: "password678",
      role: "admin",
    },
    rooms: {
      room_name: "Room 10",
      room_type_id: 10,
      location: "Building J",
      description: "Room for strategy meetings",
      capacity: 12,
      image: null,
    },
    subjects: {
      subject_name: "Philosophy",
    },
    sections: {
      section_name: "Section J",
    },
  },
];


      const [selectedSection, setSelectedSection] = useState(""); // Track
      const [warnings, setWarnings] = useState({});
      const [editDialog, setEditDialog] = useState(null);
      const [deleteDialog, setDeleteDialog] = useState(null);
  const [expandedRows, setExpandedRows] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
      const [searchTerm, setSearchTerm] = useState("");
  const [daysFilter, setDaysFilter] = useState(7);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 
    const [selectedSidebar, setSelectedSidebar] = useState("Dashboard");
      // const filteredBookings = bookings.filter((booking) => {
      //   const today = new Date();
      //   const bookingDate = new Date(booking?.book_from);
      //   const diffTime = today - bookingDate;
      //   const diffDays = diffTime / (1000 * 3600 * 24);

      //   if (isNaN(bookingDate)) return false;

      //   const isInDateRange =
      //     (daysFilter === 7 && diffDays <= 7) ||
      //     (daysFilter === 28 && diffDays <= 28) ||
      //     (daysFilter === 90 && diffDays <= 90);

      //   const matchesSearchTerm =
      //     booking?.users?.name
      //       ?.toLowerCase()
      //       ?.includes(searchTerm.toLowerCase()) ||
      //     booking?.rooms?.room_name
      //       ?.toLowerCase()
      //       ?.includes(searchTerm.toLowerCase());

      //   return isInDateRange && matchesSearchTerm;
      // });
     const filteredBookings = bookings.filter(
       (booking) => booking?.sections?.id === selectedSection
     );
    const contentRef = useRef(null);
    
    const bookedDates = new Set(
      filteredBookings
        .map((booking) => {
          const startDate = dayjs(booking.book_from).format("YYYY-MM-DD");
          const endDate = dayjs(booking.book_until).format("YYYY-MM-DD");

          // Include both start and end dates in the bookedDates set
          return startDate === endDate ? startDate : [startDate, endDate];
        })
        .flat()
    );
 const sections = [
   {
     id: 1,
     section_name: "IT-1E2",
     section_type: "DTS",
     created_at: "2024-11-11",
     updated_at: "2024-11-11",
   },
   {
     id: 2,
     section_name: "IT-2F3",
     section_type: "DTS",
     created_at: "2024-11-12",
     updated_at: "2024-11-12",
   },
   {
     id: 3,
     section_name: "IT-3G4",
     section_type: "DTS",
     created_at: "2024-11-13",
     updated_at: "2024-11-13",
   },
   {
     id: 4,
     section_name: "IT-4H5",
     section_type: "DTS",
     created_at: "2024-11-14",
     updated_at: "2024-11-14",
   },
   {
     id: 5,
     section_name: "IT-5I6",
     section_type: "DTS",
     created_at: "2024-11-15",
     updated_at: "2024-11-15",
   },
   {
     id: 6,
     section_name: "IT-6J7",
     section_type: "DTS",
     created_at: "2024-11-16",
     updated_at: "2024-11-16",
   },
   {
     id: 7,
     section_name: "IT-7K8",
     section_type: "DTS",
     created_at: "2024-11-17",
     updated_at: "2024-11-17",
   },
   {
     id: 8,
     section_name: "IT-8L9",
     section_type: "DTS",
     created_at: "2024-11-18",
     updated_at: "2024-11-18",
   },
   {
     id: 9,
     section_name: "IT-9M0",
     section_type: "DTS",
     created_at: "2024-11-19",
     updated_at: "2024-11-19",
   },
   {
     id: 10,
     section_name: "IT-10N1",
     section_type: "DTS",
     created_at: "2024-11-20",
     updated_at: "2024-11-20",
   },
 ];
  const toggleSidebar = () => {
    setOpen(!open);
  };
    const handleSidebarClick = (sidebar) => {
      setSelectedSidebar(sidebar);
      setOpen(false);
    };
const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{ display: "flex", padding: 0, margin: 0 }}>
        {/* Sidebar (Drawer) */}
        <Drawer
          sx={{
            width: 200,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 200,
              boxSizing: "border-box",
            },
          }}
          variant={isSmallScreen ? "temporary" : "permanent"}
          anchor="left"
          open={isSmallScreen ? !open : !!open}
        >
          <List>
            {isSmallScreen ? (
              <ListItem
                onClick={() => setOpen(!open)}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "end",
                }}
                button="true"
              >
                <Close />
              </ListItem>
            ) : null}
            <ListItem
              onClick={() => {
                setOpen(false);
                handleSidebarClick("Dashboard");
              }}
              sx={{
                cursor: "pointer",
                backgroundColor:
                  selectedSidebar === "Dashboard" ? "gray" : "transparent", // Highlight when selected
              }}
              button="true"
            >
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                backgroundColor:
                  selectedSidebar === "Bookings" ? "gray" : "transparent", // Highlight when selected
              }}
              button="true"
              onClick={() => {
                handleSidebarClick("Bookings");
                setOpen(false);
              }}
            >
              <ListItemText primary="Bookings" />
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                backgroundColor:
                  selectedSidebar === "Rooms" ? "gray" : "transparent", // Highlight when selected
              }}
              button="true"
              onClick={() => {
                handleSidebarClick("Rooms");
                setOpen(false);
              }}
            >
              <ListItemText primary="Rooms" />
            </ListItem>
            <ListItem
              onClick={() => {
                handleSidebarClick("Subjects");
                setOpen(false);
              }}
              sx={{
                cursor: "pointer",
                backgroundColor:
                  selectedSidebar === "Subjects" ? "gray" : "transparent", // Highlight when selected
              }}
              button="true"
            >
              <ListItemText primary="Subjects" />
            </ListItem>
            <ListItem
              onClick={() => {
                handleSidebarClick("Room Types");
                setOpen(false);
              }}
              sx={{
                cursor: "pointer",
                backgroundColor:
                  selectedSidebar === "Room Types" ? "gray" : "transparent", // Highlight when selected
              }}
              button="true"
            >
              <ListItemText primary="Room Types" />
            </ListItem>
            <ListItem
              onClick={() => {
                setOpen(false);
                handleSidebarClick("Sections");
              }}
              sx={{
                cursor: "pointer",
                backgroundColor:
                  selectedSidebar === "Sections" ? "gray" : "transparent", // Highlight when selected
              }}
              button="true"
            >
              <ListItemText primary="Sections" />
            </ListItem>
            <ListItem
              onClick={() => handleLogout()}
              sx={{
                cursor: "pointer",
                backgroundColor:
                  selectedSidebar === "Logout" ? "gray" : "transparent", // Highlight when selected
              }}
              button="true"
            >
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Drawer>
        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            padding: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AppBar position="sticky">
            <Toolbar>
              {isSmallScreen && (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleSidebar}
                >
                  <Menu />
                </IconButton>
              )}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="h6">MFI</Typography>
                <Typography>Admin</Typography>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Dashboard Section */}
          <CSSTransition
            nodeRef={contentRef}
            timeout={300}
            classNames="fade"
            unmountOnExit
            in={selectedSidebar === "Dashboard"}
          >
            <Container sx={{ marginTop: 4 }} ref={contentRef}>
              <h2>Recents</h2>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          p: isSmallScreen ? 1 : 2,
                          border: "1px solid black",
                        }}
                      >
                        More Info Click Here
                      </TableCell>
                      <TableCell
                        sx={{
                          p: isSmallScreen ? 1 : 2,
                          border: "1px solid black",
                        }}
                      >
                        Username
                      </TableCell>
                      <TableCell
                        sx={{
                          p: isSmallScreen ? 1 : 2,
                          border: "1px solid black",
                        }}
                      >
                        Room Name
                      </TableCell>
                      <TableCell
                        sx={{
                          p: isSmallScreen ? 1 : 2,
                          border: "1px solid black",
                        }}
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bookings.map((booking) => (
                      <>
                        <TableRow key={booking.id}>
                          <TableCell
                            sx={{
                              p: isSmallScreen ? 1 : 2,
                              border: "1px solid black",
                            }}
                          >
                            <Button
                              onClick={() => handleRowToggle(booking.id)}
                              size="small"
                              variant="outlined"
                              sx={{
                                minWidth: "40px",
                                textAlign: "center",
                              }}
                            >
                              {expandedRows.includes(booking.id) ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )}
                            </Button>
                          </TableCell>
                          <TableCell
                            sx={{
                              p: isSmallScreen ? 1 : 2,
                              border: "1px solid black",
                            }}
                          >
                            {booking?.id + ".) " + booking?.users?.name}
                          </TableCell>
                          <TableCell
                            sx={{
                              p: isSmallScreen ? 1 : 2,
                              border: "1px solid black",
                            }}
                          >
                            {booking?.rooms?.room_name}
                          </TableCell>
                          <TableCell sx={{ border: "1px solid black" }}>
                            <Button
                              onClick={() => setEditDialog(booking)}
                              color="warning"
                              variant="contained"
                              sx={{ mr: 1 }}
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => setDeleteDialog(booking.id)}
                              color="error"
                              variant="contained"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>

                        {/* Additional content to be displayed when row is expanded */}
                        {expandedRows.includes(booking.id) && (
                          <TableRow>
                            <TableCell colSpan={4}>
                              <List>
                                <ListItem>
                                  Subject: {booking?.subjects?.subject_name}
                                </ListItem>
                                <ListItem>
                                  Section: {booking?.sections?.section_name}
                                </ListItem>
                                <ListItem>
                                  Day of Week: {booking?.day_of_week}
                                </ListItem>
                                <ListItem>
                                  Time: {booking?.start_time.slice(0, 5)} -{" "}
                                  {booking?.end_time.slice(0, 5)}
                                </ListItem>
                                <ListItem>
                                  Book From: {booking?.book_from}
                                </ListItem>
                                <ListItem>
                                  Book Until: {booking?.book_until}
                                </ListItem>
                                <ListItem>Status: {booking?.status}</ListItem>
                              </List>
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </CSSTransition>

          {/* Bookings Section */}
          <CSSTransition
            nodeRef={contentRef}
            timeout={300}
            classNames="fade"
            unmountOnExit
            in={selectedSidebar === "Bookings"}
          >
            <Box sx={{ padding: 2 }} ref={contentRef}>
              {/* Section Selector */}
              <FormControl fullWidth>
                <InputLabel>Section name</InputLabel>
                <Select
                  fullWidth
                  value={selectedSection} // The value of the select
                  onChange={(e) => setSelectedSection(e.target.value)} // Update selectedSection when a new value is selected
                  sx={{ mb: 2 }}
                >
                  {/* Map over the sections to create the MenuItems */}
                  {sections && sections.length > 0 ? (
                    sections.map((section) => (
                      <MenuItem key={section.id} value={section.id}>
                        {section.section_name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">Sections Available</MenuItem>
                  )}
                </Select>
              </FormControl>

              {/* Calendar with Red Dots for Bookings */}
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isSmallScreen
                    ? "space-evenly"
                    : "space-between",
                  flexWrap: isSmallScreen ? "wrap" : "nowrap",
                  padding: 0,
                  margin: 0,
                }}
              >
                <Container>
                  <Calendar tileContent={tileContent} />
                </Container>
                <Container sx={{ maxWidth: 400 }}>
                  <Typography variant="h6">Create New Booking</Typography>
                  <Divider sx={{ marginBottom: 2 }} />
                  <Box component="form" onSubmit={handleAddBooking}>
                    <Grid container spacing={2}>
                      {/* Room Name Select */}
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel id="room-select-label">
                            Room Name
                          </InputLabel>
                          <Select
                            labelId="room-select-label"
                            name="roomId"
                            value={newBooking.roomId}
                            onChange={handleBookingChange}
                            label="Room Name"
                          >
                            {rooms.map((room) => (
                              <MenuItem key={room.id} value={room.id}>
                                {room.room_name} (Capacity: {room.capacity})
                              </MenuItem>
                            ))}
                          </Select>
                          {warnings?.room_id ? (
                            <FormHelperText error>
                              {warnings.room_id}
                            </FormHelperText>
                          ) : null}
                        </FormControl>
                      </Grid>

                      {/* Days of the Week */}
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel id="days-select-label">
                            Days of the Week
                          </InputLabel>
                          <Select
                            labelId="days-select-label"
                            name="daysOfWeek"
                            multiple
                            value={newBooking.daysOfWeek}
                            onChange={handleDaySelection}
                            renderValue={(selected) => selected.join(", ")}
                          >
                            {[
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday",
                              "Friday",
                              "Saturday",
                              "Sunday",
                            ].map((day) => (
                              <MenuItem key={day} value={day}>
                                <Checkbox
                                  checked={newBooking.daysOfWeek.includes(day)}
                                />
                                {day}
                              </MenuItem>
                            ))}
                          </Select>
                          {warnings?.day_of_week ? (
                            <FormHelperText error>
                              {warnings.day_of_week}
                            </FormHelperText>
                          ) : null}
                        </FormControl>
                      </Grid>

                      {/* Start Time */}
                      <Grid item xs={6}>
                        <InputLabel>Start Time</InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileTimePicker
                            value={newBooking.startTime}
                            onChange={handleStartTimeChange}
                          />
                        </LocalizationProvider>
                        {warnings?.start_time ? (
                          <FormHelperText error>
                            {warnings.start_time}
                          </FormHelperText>
                        ) : null}
                      </Grid>

                      {/* End Time */}
                      <Grid item xs={6}>
                        <InputLabel>End Time</InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileTimePicker
                            value={newBooking.endTime}
                            onChange={handleEndTimeChange}
                          />
                        </LocalizationProvider>
                        {warnings?.end_time ? (
                          <FormHelperText error>
                            {warnings.end_time}
                          </FormHelperText>
                        ) : null}
                      </Grid>

                      {/* Subject Select */}
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel id="subject-select-label">
                            Subject
                          </InputLabel>
                          <Select
                            labelId="subject-select-label"
                            name="subjectId"
                            value={newBooking.subjectId}
                            onChange={handleBookingChange}
                            label="Subject"
                          >
                            {subjects.map((subject) => (
                              <MenuItem key={subject.id} value={subject.id}>
                                {subject.subject_name}
                              </MenuItem>
                            ))}
                          </Select>
                          {warnings?.subject_id ? (
                            <FormHelperText error>
                              {warnings.subject_id}
                            </FormHelperText>
                          ) : null}
                        </FormControl>
                      </Grid>

                      {/* Section Select */}
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel id="section-select-label">
                            Section
                          </InputLabel>
                          <Select
                            labelId="section-select-label"
                            name="sectionId"
                            value={newBooking.sectionId}
                            onChange={handleBookingChange}
                            label="Section"
                          >
                            {sections.map((section) => (
                              <MenuItem key={section.id} value={section.id}>
                                {section.section_name}
                              </MenuItem>
                            ))}
                          </Select>
                          {warnings?.section_id ? (
                            <FormHelperText error>
                              {warnings.section_id}
                            </FormHelperText>
                          ) : null}
                        </FormControl>
                      </Grid>

                      {/* Date From */}
                      <Grid item xs={6}>
                        <TextField
                          label="Date From"
                          name="date_from"
                          type="date"
                          value={newBooking.date_from}
                          onChange={handleBookingChange}
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {warnings?.book_from ? (
                          <FormHelperText error>
                            {warnings.book_from}
                          </FormHelperText>
                        ) : null}
                      </Grid>

                      {/* Date Until */}
                      <Grid item xs={6}>
                        <TextField
                          label="Date Until"
                          name="date_until"
                          type="date"
                          value={newBooking.date_until}
                          onChange={handleBookingChange}
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {warnings?.book_until ? (
                          <FormHelperText error>
                            {warnings.book_until}
                          </FormHelperText>
                        ) : null}
                      </Grid>

                      {/* Submit Button */}
                      <Grid item xs={12}>
                        <Button variant="contained" type="submit" fullWidth>
                          Add Booking
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
              </Box>
              {/* Bookings Table for the selected section */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6">
                  Bookings for{" "}
                  {
                    sections.find((section) => section.id === selectedSection)
                      ?.section_name
                  }
                </Typography>
                {isSmallScreen ? (
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              p: isSmallScreen ? 1 : 2,
                              border: "1px solid black",
                            }}
                          >
                            More Info Click Here
                          </TableCell>
                          <TableCell
                            sx={{
                              p: isSmallScreen ? 1 : 2,
                              border: "1px solid black",
                            }}
                          >
                            Username
                          </TableCell>
                          <TableCell
                            sx={{
                              p: isSmallScreen ? 1 : 2,
                              border: "1px solid black",
                            }}
                          >
                            Room Name
                          </TableCell>
                          <TableCell
                            sx={{
                              p: isSmallScreen ? 1 : 2,
                              border: "1px solid black",
                            }}
                          >
                            Actions
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {(filteredBookings.length > 0
                          ? filteredBookings
                          : bookings
                        ).map((booking) => (
                          <>
                            <TableRow key={booking.id}>
                              <TableCell
                                sx={{
                                  p: isSmallScreen ? 1 : 2,
                                  border: "1px solid black",
                                }}
                              >
                                <Button
                                  onClick={() => handleRowToggle(booking.id)}
                                  size="small"
                                  variant="outlined"
                                  sx={{
                                    minWidth: "40px",
                                    textAlign: "center",
                                  }}
                                >
                                  {expandedRows.includes(booking.id) ? (
                                    <ExpandLess />
                                  ) : (
                                    <ExpandMore />
                                  )}
                                </Button>
                              </TableCell>
                              <TableCell
                                sx={{
                                  p: isSmallScreen ? 1 : 2,
                                  border: "1px solid black",
                                }}
                              >
                                {booking?.id + ".) " + booking?.users?.name}
                              </TableCell>
                              <TableCell
                                sx={{
                                  p: isSmallScreen ? 1 : 2,
                                  border: "1px solid black",
                                }}
                              >
                                {booking?.rooms?.room_name}
                              </TableCell>
                              <TableCell sx={{ border: "1px solid black" }}>
                                <Button
                                  onClick={() => setEditDialog(booking)}
                                  color="warning"
                                  variant="contained"
                                  sx={{ mr: 1 }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  onClick={() => setDeleteDialog(booking.id)}
                                  color="error"
                                  variant="contained"
                                >
                                  Delete
                                </Button>
                              </TableCell>
                            </TableRow>

                            {/* Additional content to be displayed when row is expanded */}
                            {expandedRows.includes(booking.id) && (
                              <TableRow>
                                <TableCell colSpan={4}>
                                  <List>
                                    <ListItem>
                                      Subject: {booking?.subjects?.subject_name}
                                    </ListItem>
                                    <ListItem>
                                      Section: {booking?.sections?.section_name}
                                    </ListItem>
                                    <ListItem>
                                      Day of Week: {booking?.day_of_week}
                                    </ListItem>
                                    <ListItem>
                                      Time: {booking?.start_time.slice(0, 5)} -{" "}
                                      {booking?.end_time.slice(0, 5)}
                                    </ListItem>
                                    <ListItem>
                                      Book From: {booking?.book_from}
                                    </ListItem>
                                    <ListItem>
                                      Book Until: {booking?.book_until}
                                    </ListItem>
                                    <ListItem>
                                      Status: {booking?.status}
                                    </ListItem>
                                  </List>
                                </TableCell>
                              </TableRow>
                            )}
                          </>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <TableContainer component={Paper} sx={{ mt: 2 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Username</TableCell>
                          <TableCell>Room</TableCell>
                          <TableCell>Subject</TableCell>
                          <TableCell>Section</TableCell>
                          <TableCell>Day of Week</TableCell>
                          <TableCell>Time</TableCell>
                          <TableCell>Book From</TableCell>
                          <TableCell>Book Until</TableCell>
                          <TableCell>Status</TableCell>

                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {(filteredBookings.length > 0
                          ? filteredBookings
                          : bookings
                        ).map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell>
                              {booking?.id + ".) " + booking?.users?.name}
                            </TableCell>
                            <TableCell>{booking?.rooms?.room_name}</TableCell>
                            <TableCell>
                              {booking?.subjects?.subject_name}
                            </TableCell>
                            <TableCell>
                              {booking?.sections?.section_name}
                            </TableCell>
                            <TableCell>{booking?.day_of_week}</TableCell>
                            <TableCell>
                              {booking?.start_time.slice(0, 5) +
                                " - " +
                                booking?.end_time.slice(0, 5)}
                            </TableCell>
                            <TableCell>{booking?.book_from}</TableCell>
                            <TableCell>{booking?.book_until}</TableCell>
                            <TableCell
                              style={{
                                background:
                                  booking.status === "confirmed"
                                    ? "#72A98F"
                                    : booking.status === "pending"
                                    ? "orange"
                                    : booking.status === "rejected"
                                    ? "red"
                                    : "black",
                                p: isSmallScreen ? 1 : 2,

                                borderRadius: "10px",
                                color: "black",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}
                            >
                              {booking?.status}
                            </TableCell>

                            <TableCell>
                              <Button
                                onClick={() => setEditDialog(booking)}
                                color="warning"
                                variant="contained"
                                sx={{ mr: 1 }}
                              >
                                Edit
                              </Button>
                              <Button
                                onClick={() => setDeleteDialog(booking.id)}
                                color="error"
                                variant="contained"
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Box>
              <Dialog open={!!deleteDialog}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                  <Typography>
                    Are you sure you want to delete this booking? <br /> This
                    action cannot be undone.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => setDeleteDialog(null)}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      handleDeleteBooking(deleteDialog);
                    }}
                    color="error"
                    variant="contained"
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>

              <Dialog open={!!editDialog}>
                <DialogTitle>Edit Booking</DialogTitle>
                <DialogContent>
                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel>Room</InputLabel>
                    <Select
                      name="room"
                      value={editDialog?.rooms?.id}
                      onChange={(e) =>
                        setEditDialog({
                          ...editDialog,
                          room_id: e.target.value,
                        })
                      }
                    >
                      {rooms.map((room) => (
                        <MenuItem key={room.id} value={room.id}>
                          {room.room_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel>Subject</InputLabel>
                    <Select
                      name="subject"
                      value={editDialog?.subjects?.id}
                      onChange={(e) =>
                        setEditDialog({
                          ...editDialog,
                          subject_name: e.target.value,
                        })
                      }
                    >
                      {/* Map through your list of subjects */}
                      {subjects.map((subject) => (
                        <MenuItem key={subject.id} value={subject.id}>
                          {subject.subject_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel>Section</InputLabel>
                    <Select
                      name="section"
                      value={editDialog?.sections?.id}
                      onChange={(e) =>
                        setEditDialog({
                          ...editDialog,
                          section_name: e.target.value,
                        })
                      }
                    >
                      {/* You can map through a list of available sections if you have one */}
                      {sections.map((section) => (
                        <MenuItem key={section.id} value={section.id}>
                          {section.section_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    label="Book From"
                    name="book_from"
                    value={editDialog?.book_from}
                    fullWidth
                    sx={{ marginTop: 2 }}
                    type="date"
                  />

                  <TextField
                    label="Book Until"
                    name="book_until"
                    value={editDialog?.book_until}
                    fullWidth
                    sx={{ marginTop: 2 }}
                    type="date"
                  />

                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel>Day of Week</InputLabel>
                    <Select
                      name="day_of_week"
                      value={editDialog?.day_of_week}
                      onChange={(e) =>
                        setEditDialog({
                          ...editDialog,
                          day_of_week: e.target.value,
                        })
                      }
                    >
                      {[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ].map((day) => (
                        <MenuItem key={day} value={day}>
                          {day}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileTimePicker
                        value={
                          startTime || dayjs(editDialog?.start_time, "HH:mm")
                        }
                        onChange={(newValue) => setStartTime(newValue)}
                      />
                    </LocalizationProvider>
                  </FormControl>

                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileTimePicker
                        value={endTime || dayjs(editDialog?.end_time, "HH:mm")}
                        onChange={(newValue) => setEndTime(newValue)}
                      />
                    </LocalizationProvider>
                  </FormControl>
                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                      name="status"
                      value={editDialog?.status}
                      onChange={(e) =>
                        setEditDialog({ ...editDialog, status: e.target.value })
                      }
                    >
                      {["confirmed", "pending", "rejected"].map((status) => (
                        <MenuItem
                          key={status}
                          value={status}
                          disabled={status === "pending"}
                        >
                          {status}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <DialogActions>
                    <Button
                      onClick={() => setEditDialog(null)}
                      variant="contained"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        handleEditBooking(editDialog?.id);
                      }}
                      color="warning"
                      variant="contained"
                    >
                      Update
                    </Button>
                  </DialogActions>
                </DialogContent>
              </Dialog>
            </Box>
          </CSSTransition>
        </Box>
      </Box>
    </>
  );
}

