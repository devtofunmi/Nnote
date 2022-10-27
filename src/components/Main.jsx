import React, { useState } from "react";

import {
  Box,
  Button,
  Flex,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import AddNote from "../components/AddNote";
import NoteCard from "./NoteCard";
import { MdBookmarkAdd } from "react-icons/md";
import DashboardLayout from "../layout/DashboardLayout";
import ViewNote from "./ViewNote";
import Topbar from "./Topbar";

const Main = () => {
  const [showAddNewNotePopup, setShowAddNewNotePopup] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const closePopup = () => {
    setShowAddNewNotePopup(false);
  };
  const [notes, setNotes] = useState([
    {
      id: "1apnamdur",
      date: "2022-10-25T10:10:57.065Z",
      title:
        "average evanescent romantic suppose laugh unequaled frequent attach ill-informed bashful corn many",
      content:
        "average evanescent romantic suppose laugh unequaled frequent attach ill-informed bashful corn many faulty ritzy clammy telling dispensable poke harm lighten vacuous tent part rural ubiquitous",
    },
    {
      id: "sg4qhqhhh",
      date: "2022-10-18T19:20:25.548Z",
      title:
        "belong tiresome ruin useful doll weight ubiquitous ambitious club abhorrent tent grass",
      content:
        "belong tiresome ruin useful doll weight ubiquitous ambitious club abhorrent tent grass fog rough kill sassy telling song ritzy ill-informed grotesque questionable name cherries stormy",
    },
    {
      id: "mhtx83phi",
      date: "2022-10-31T06:59:16.714Z",
      title:
        "divergent puzzled yard strengthen puny stormy shallow winter tiresome offbeat suppose club",
      content:
        "divergent puzzled yard strengthen puny stormy shallow winter tiresome offbeat suppose club humorous unequaled laugh ill-informed useful vacuous belong song fixed bashful ruin rural attach",
    },
    {
      id: "dokjcaefk",
      date: "2022-10-28T07:45:53.263Z",
      title:
        "bashful frequent blink kill attach lavish accidental stupendous polish raise bare annoyed",
      content:
        "bashful frequent blink kill attach lavish accidental stupendous polish raise bare annoyed song tent name unequaled rough puzzled retire questionable rural sassy title puny leather",
    },
    {
      id: "emej9oesn",
      date: "2022-10-11T14:57:09.834Z",
      title:
        "bashful program fog ruin ready puny offbeat sound part elegant racial hushed",
      content:
        "bashful program fog ruin ready puny offbeat sound part elegant racial hushed scribble laugh belong ubiquitous grotesque club misty lighten children stupendous many harm sugar",
    },
    {
      id: "vkpswvcff",
      date: "2022-10-09T21:33:41.352Z",
      title:
        "ubiquitous pathetic frequent prefer evanescent fog clammy dispensable corn puny sound tempt",
      content:
        "ubiquitous pathetic frequent prefer evanescent fog clammy dispensable corn puny sound tempt name racial lighten ambitious poke program squirrel rabbit animal acidic strengthen stocking humorous",
    },
    {
      id: "vnwzqpf3k",
      date: "2022-10-19T23:20:01.586Z",
      title:
        "clean retire scribble song squirrel abhorrent belong ambitious crabby humorous assorted telling",
      content:
        "clean retire scribble song squirrel abhorrent belong ambitious crabby humorous assorted telling part offbeat evanescent corn lavish annoyed stocking vacuous poke attach raise sound laugh",
    },
    {
      id: "fywdtw10w",
      date: "2022-10-27T02:14:50.717Z",
      title:
        "dispensable sound crook abhorrent frequent tent suppose dear scribble animal attach strengthen",
      content:
        "dispensable sound crook abhorrent frequent tent suppose dear scribble animal attach strengthen name shallow misty ruin stormy poke cherries many grotesque squirrel linen blink annoyed",
    },
    {
      id: "npxh8yyay",
      date: "2022-10-29T18:45:58.061Z",
      title:
        "winter assorted fixed useful clammy puzzled cherries sugar compete rabbit lavish retire",
      content:
        "winter assorted fixed useful clammy puzzled cherries sugar compete rabbit lavish retire neighborly romantic stupendous lighten title questionable ruin acidic belong corn crabby annoyed telling",
    },
    {
      id: "2brl290fr",
      date: "2022-10-17T16:35:53.690Z",
      title:
        "polish average shallow strengthen acidic clammy rural abhorrent sugar sound offbeat scribble",
      content:
        "polish average shallow strengthen acidic clammy rural abhorrent sugar sound offbeat scribble evanescent tent sassy fixed blink suppose club puny ambitious kill harm lavish neighborly",
    },
    {
      id: "qv5aikgzc",
      date: "2022-10-25T19:27:30.055Z",
      title:
        "compete telling hushed tiresome weight rabbit sassy tempt belong leather clean accidental",
      content:
        "compete telling hushed tiresome weight rabbit sassy tempt belong leather clean accidental annoyed vacuous assorted misty abhorrent yard suppose program ubiquitous key tent frequent faulty",
    },
    {
      id: "lekndrojz",
      date: "2022-10-10T10:06:49.285Z",
      title:
        "vacuous dear grotesque part unequaled sugar average clean name harm club kill",
      content:
        "vacuous dear grotesque part unequaled sugar average clean name harm club kill dispensable ubiquitous rural grass nine annoyed raise frequent ritzy tiresome fixed corn suppose",
    },
    {
      id: "bfpsh90e4",
      date: "2022-10-20T03:54:21.277Z",
      title:
        "rough cherries prefer polish ubiquitous fog ritzy retire scribble strengthen romantic name",
      content:
        "rough cherries prefer polish ubiquitous fog ritzy retire scribble strengthen romantic name suppose blink puzzled unequaled sound stupendous children animal tent weight acidic stocking sugar",
    },
    {
      id: "cc19ehyg6",
      date: "2022-10-03T14:41:43.642Z",
      title:
        "corn lavish dispensable retire useful bolt name accidental sugar abhorrent club nine",
      content:
        "corn lavish dispensable retire useful bolt name accidental sugar abhorrent club nine racial title ill-informed crook ritzy winter stormy rough blink fixed program cherries crabby",
    },
    {
      id: "jxh7u1sf1",
      date: "2022-10-28T18:20:16.658Z",
      title:
        "ready average rough bashful retire weight part puny rhetorical grass tiresome misty",
      content:
        "ready average rough bashful retire weight part puny rhetorical grass tiresome misty sassy laugh club ubiquitous song crook nerve program dispensable elegant romantic useful unequaled",
    },
    {
      id: "7xd3mb7vo",
      date: "2022-10-04T16:05:29.728Z",
      title:
        "humorous doll bolt abhorrent frequent dispensable raise grass evanescent ill-informed elegant pathetic",
      content:
        "humorous doll bolt abhorrent frequent dispensable raise grass evanescent ill-informed elegant pathetic tempt weight lavish stocking lighten average acidic winter puny scribble assorted kill linen",
    },
    {
      id: "wtwg479jn",
      date: "2022-10-25T16:33:28.441Z",
      title:
        "tent stormy dispensable nine blink ambitious raise shallow lighten belong ill-informed fixed",
      content:
        "tent stormy dispensable nine blink ambitious raise shallow lighten belong ill-informed fixed title attach annoyed sugar grotesque abhorrent crook crabby fog humorous lavish bolt harm",
    },
    {
      id: "nf3agsff2",
      date: "2022-10-07T21:54:48.133Z",
      title:
        "nine prefer rhetorical key quartz fog ubiquitous attach sound tempt part elegant",
      content:
        "nine prefer rhetorical key quartz fog ubiquitous attach sound tempt part elegant fixed vacuous bolt unequaled yard useful doll faulty rural sugar raise poke annoyed",
    },
    {
      id: "804960raz",
      date: "2022-10-27T17:05:19.297Z",
      title:
        "linen misty assorted nerve clean part belong harm rural weight evanescent yard",
      content:
        "linen misty assorted nerve clean part belong harm rural weight evanescent yard ready frequent strengthen unequaled puzzled many romantic jittery useful humorous blink lighten tiresome",
    },
    {
      id: "qp0h9zxbq",
      date: "2022-10-19T22:25:48.403Z",
      title:
        "bashful part sound humorous quartz hushed jittery doll sugar club romantic bare",
      content:
        "bashful part sound humorous quartz hushed jittery doll sugar club romantic bare assorted sassy prefer polish tiresome grotesque stupendous crook kill rhetorical crabby title divergent",
    },
    {
      id: "0ge93epqk",
      date: "2022-10-06T23:14:57.163Z",
      title:
        "telling ready ritzy lavish fixed stocking shallow sugar scribble prefer unequaled children",
      content:
        "telling ready ritzy lavish fixed stocking shallow sugar scribble prefer unequaled children romantic frequent clammy quartz nine jittery strengthen tempt offbeat questionable blink grass pathetic",
    },
    {
      id: "dklgqpqx9",
      date: "2022-10-21T20:25:42.747Z",
      title:
        "strengthen vacuous kill ready frequent many retire abhorrent crook ubiquitous rural scribble",
      content:
        "strengthen vacuous kill ready frequent many retire abhorrent crook ubiquitous rural scribble rough key dear raise children bolt tiresome acidic corn puny part jittery romantic",
    },
    {
      id: "mjcagkx4p",
      date: "2022-10-15T20:28:27.074Z",
      title:
        "squirrel misty evanescent rabbit abhorrent poke blink ambitious useful tent questionable linen",
      content:
        "squirrel misty evanescent rabbit abhorrent poke blink ambitious useful tent questionable linen fixed acidic offbeat raise humorous nerve telling polish yard annoyed quartz puny lighten",
    },
    {
      id: "jyijitlx6",
      date: "2022-10-26T23:15:16.143Z",
      title:
        "elegant scribble compete dispensable humorous leather poke ill-informed pathetic title vacuous clammy",
      content:
        "elegant scribble compete dispensable humorous leather poke ill-informed pathetic title vacuous clammy ruin neighborly ambitious bolt part suppose grass assorted polish puzzled tiresome abhorrent blink",
    },
    {
      id: "7j0tacj66",
      date: "2022-10-06T05:57:45.606Z",
      title:
        "clean harm ubiquitous shallow kill ready weight bolt poke children clammy corn",
      content:
        "clean harm ubiquitous shallow kill ready weight bolt poke children clammy corn grotesque tent evanescent program lavish sound grass useful pathetic misty nine sassy telling",
    },
  ]);
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePopup = () => {
    setIsOpen(!isOpen);
  };

  const populateModal = (id) => {
    setModalContent(notes.filter((note) => note.id === id)[0]);
  };
  const showError = (message) => {
    toast({
      description: message,
      status: "error",
      duration: 1500,
      isClosable: true,
    });
  };
  const addNewNote = (title, content, date) => {
    if (!title) {
      showError("enter title");
    } else if (!content) {
      showError("enter note content");
    } else {
      toast({
        description: "Note added successfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    }

    const note = {
      title,
      content,
      date,
    };
    setNotes([...notes, note]);
    // console.log(note);
  };

  const filterByDate = (from, to) => {
    return notes.filter((note) => {
      return new Date(note.date) >= from && new Date(note.date) <= to;
    });
  };

  const last24h = () => {
    const dayStart = new Date(new Date().setHours(0, 0, 0, 0));
    const dayEnd = new Date(new Date().setHours(23, 59, 59, 999));
    return filterByDate(dayStart, dayEnd);
  };

  const thisWeek = () => {
    const date = new Date();
    const weekStart = new Date(date.setDate(date.getDate() - date.getDay()));
    const weekEnd = new Date(date.setDate(date.getDate() - date.getDay() + 6));
    weekStart.setHours(0, 0, 0, 0);
    weekEnd.setHours(168, 413, 413, 6993);

    // console.log(filterByDate(weekStart, weekEnd));

    return filterByDate(weekStart, weekEnd);
  };

  const thisMonth = () => {
    const date = new Date();
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthEnd = new Date(
      date.setDate(date.getFullYear(), date.getMonth() + 1, 0)
    );
    // console.log(monthStart);

    return filterByDate(monthStart, monthEnd);
  };

  function truncateString(str) {
    if (str.length <= 15) {
      return str;
    } else return str.slice(0, 15) + "...";
  }

  const filterNotes = () => {
    if (!searchQuery) {
      return notes;
    } else {
      return notes.filter((note) => {
        note.title.toLowerCase().startsWith(searchQuery);
      });
    }
  };

  return (
    <DashboardLayout>
      <ViewNote
        isOpen={isOpen}
        handlePopup={handlePopup}
        title={modalContent.title}
        content={modalContent.content}
      />

      <AddNote
        isOpen={showAddNewNotePopup}
        closePopup={closePopup}
        addNewNote={addNewNote}
      />
      <Flex direction={"column"} p={"40px"}>
        <Input
          w={["70%", "50%"]}
          bg={"#202225"}
          placeholder={"Search..."}
          _placeholder={{
            color: "#afb1b3",
          }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <Text fontSize={"20px"} fontWeight={"bold"} mt={"20px"}>
          My Notes
        </Text>
        <Button
          mt={"20px"}
          onClick={() => setShowAddNewNotePopup(true)}
          w={"150px"}
          bg={"#176fe4"}
        >
          Add New Note
        </Button>

        <Tabs mt={"30px"}>
          <TabList>
            <Tab>Today</Tab>
            <Tab>This week</Tab>
            <Tab>This month</Tab>
            <Tab>All Notes</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex gap={"20px"} wrap={"wrap"}>
                {last24h().map((note) => (
                  <Box
                    key={note.id}
                    width={"300px"}
                    bg={"#181819"}
                    p={"17px"}
                    borderRadius={"10px"}
                    onClick={() => {
                      handlePopup();
                      populateModal(note.id);
                    }}
                  >
                    <Flex>
                      <Box w={"80%"} h={"150px"}>
                        <Text fontSize={["15px", "20px"]}>
                          {truncateString(note.title)}
                        </Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
                          {truncateString(note.content)}
                        </Text>
                      </Box>
                      <Button
                        bg={"blue.400"}
                        _hover={{
                          backgroundColor: "rgba(#181819, 0.2)",
                        }}
                      >
                        <Text fontSize={"2xl"}>
                          <MdBookmarkAdd />
                        </Text>
                      </Button>
                    </Flex>
                  </Box>
                ))}
              </Flex>
            </TabPanel>

            <TabPanel>
              <Flex gap={"20px"} wrap={"wrap"}>
                {thisWeek().map((note) => (
                  <Box
                    key={note.id}
                    width={"300px"}
                    bg={"#181819"}
                    p={"17px"}
                    borderRadius={"10px"}
                    onClick={handlePopup}
                  >
                    <Flex>
                      <Box w={"80%"} h={"150px"}>
                        <Text fontSize={["15px", "20px"]}>
                          {truncateString(note.title)}
                        </Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
                          {truncateString(note.content)}
                        </Text>
                      </Box>
                      <Button
                        bg={"blue.400"}
                        _hover={{
                          backgroundColor: "rgba(#181819, 0.2)",
                        }}
                      >
                        <Text fontSize={"2xl"}>
                          <MdBookmarkAdd />
                        </Text>
                      </Button>
                    </Flex>
                  </Box>
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex gap={"20px"} wrap={"wrap"}>
                {/* <NoteCard /> */}
                {thisMonth().map((note) => (
                  <Box
                    key={note.id}
                    width={"300px"}
                    bg={"#181819"}
                    p={"17px"}
                    borderRadius={"10px"}
                    onClick={handlePopup}
                  >
                    <Flex>
                      <Box w={"80%"} h={"150px"}>
                        <Text fontSize={["15px", "20px"]}>
                          {truncateString(note.title)}
                        </Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
                          {truncateString(note.content)}
                        </Text>
                      </Box>
                      <Button
                        bg={"blue.400"}
                        _hover={{
                          backgroundColor: "rgba(#181819, 0.2)",
                        }}
                      >
                        <Text fontSize={"2xl"}>
                          <MdBookmarkAdd />
                        </Text>
                      </Button>
                    </Flex>
                  </Box>
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex gap={"20px"} wrap={"wrap"}>
                {notes.map((note) => (
                  <Box
                    key={note.id}
                    width={"300px"}
                    bg={"#181819"}
                    p={"17px"}
                    borderRadius={"10px"}
                    onClick={handlePopup}
                  >
                    <Flex>
                      <Box w={"80%"} h={"150px"}>
                        <Text fontSize={["15px", "20px"]}>
                          {truncateString(note.title)}
                        </Text>
                        <Text mt={5} fontSize={["10px", "15px"]}>
                          {truncateString(note.content)}
                        </Text>
                      </Box>
                      <Button
                        bg={"blue.400"}
                        _hover={{
                          backgroundColor: "rgba(#181819, 0.2)",
                        }}
                      >
                        <Text fontSize={"2xl"}>
                          <MdBookmarkAdd />
                        </Text>
                      </Button>
                    </Flex>
                  </Box>
                ))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </DashboardLayout>
  );
};

export default Main;
