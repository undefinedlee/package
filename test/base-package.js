import fs from "fs";
import path from "path";
import pack from "../index";

pack(path.join(fs.realpathSync("."), "base"));