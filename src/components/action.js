"use server";

import cloudinary from "cloudinary";

export async function addImageToAlbum(image, album) {
  console.log({ image }, { album });

  await cloudinary.v2.uploader.rename(image, `${album}/${image}`);
}

export async function createFolder(album) {
  const { folders } = await cloudinary.v2.api.root_folders();
  console.log({ folders });
  if (folders.length > 0) {
    const folderExist = folders.filter((folder) => folder.name == album);
    if (folderExist) {
      return;
    } else {
      await cloudinary.v2.api.create_folder(album);
    }
  } else {
    await cloudinary.v2.api.create_folder(album);
  }
}

export async function getAlbums(album) {
  const { folders } = await cloudinary.v2.api.root_folders();
  console.log({ folders });
  return folders;
}
