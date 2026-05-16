"use client";
export function Button() {
  async function send() {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "EL",
        age: 35,
      }),
    });

    const data = await res.json();
    console.log(data);
  }
  return <button onClick={() => send()}>Envoyer</button>;
}
