"use server";

import cloudinary from "cloudinary";

export async function addImageToAlbum(image, album) {
  const albumName = album.toLowerCase();
  console.log({ image }, { album });

  await cloudinary.v2.uploader.rename(image, `${albumName}/${image}`);
}

export async function createFolder(album) {
  const albumName = album.toLowerCase();

  const { folders } = await cloudinary.v2.api.root_folders();
  console.log({ folders });
  if (folders.length > 0) {
    const folderExist = folders.filter((folder) => folder.name == albumName);
    if (folderExist) {
      return;
    } else {
      await cloudinary.v2.api.create_folder(albumName);
    }
  } else {
    await cloudinary.v2.api.create_folder(albumName);
  }
}

export async function getAlbums(album) {
  const { folders } = await cloudinary.v2.api.root_folders();
  console.log({ folders });
  return folders;
}

export async function getPicsFromFolder(folderName) {
  console.log({ folderName });
  const { folders } = await cloudinary.v2.api.root_folders();
  console.log({ folders });
  const filter = folders.filter((folder) => folder.name == folderName);

  if (filter) {
    const pictures = await cloudinary.v2.search
      .expression(`resource_type:image AND folder=${folderName}`)
      .sort_by("created_at", "desc")
      .with_field("tags")
      .max_results(30)
      .execute();
    console.log({ pictures });
    if (pictures.resources) {
      return pictures.resources;
    }
    console.log({ pictures });
  }
  return filter;
}
