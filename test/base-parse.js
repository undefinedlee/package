import path from "path";
import parse from "../src/create-html/parse";

parse(path.join(__dirname, "base-output"), "base-package@1/views/detail/index.js");