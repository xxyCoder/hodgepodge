import { createApp } from "vue";
import Toast from "./index.vue"

export type toastType = "warn" | "error" | "normal"

let timer: string | number | NodeJS.Timeout | undefined;
export function useToast(msg: string, type: toastType = "normal") {
    const div = document.createElement("div");
    const componentInstance = createApp(Toast, {
        msg,
        type
    });
    componentInstance.mount(div);
    document.body.appendChild(div);

    clearTimeout(timer);
    timer = setTimeout(() => {
        componentInstance.unmount();
        document.body.removeChild(div);
    }, 3000);
}