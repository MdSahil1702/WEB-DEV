import dayjs from "https://cdn.skypack.dev/dayjs";

import {deepclone} from "./q2.js";
import { email } from "./q3.js";

console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));

console.log(dayjs().year())
console.log(dayjs().format("ddd, MMM - YYYY"));

deepclone();

console.log(email("sahil@.com"));