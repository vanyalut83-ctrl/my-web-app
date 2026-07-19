async function addProduct() {
  const name = document.getElementById("name").value;
  const cost = Number(document.getElementById("cost").value);
  const price = Number(document.getElementById("price").value);
  const availability = document.getElementById("availability").value;
  const photoFile = document.getElementById("photo").files[0];

  let photoUrl = null;

  if (photoFile) {
    const fileName = Date.now() + "-" + photoFile.name;

    await db.storage
      .from("products")
      .upload(fileName, photoFile);

    const { data } = db.storage
      .from("products")
      .getPublicUrl(fileName);

    photoUrl = data.publicUrl;
  }

  await db.from("products").insert([
    { name, cost, price, status: availability, photo: photoUrl }
  ]);

  alert("Товар додано ✅");
}