import React, { createContext, useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";
import Peer from "simple-peer";