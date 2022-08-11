interface UserProps{
    token: string;
    email: string;
}

export function setUserLocalStorage(user: UserProps) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage(){
    const json = localStorage.getItem("user");

    if(!json) return undefined;

    return JSON.parse(json) ?? null;
}