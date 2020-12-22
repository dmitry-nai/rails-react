class Api::PetsController < ApplicationController
  def index
    pets = {
      "entries": [
        {
          "id": "bfa978f4-c745-4b72-8cd3-dbf36592fe02",
          "slug": "name-cho",
          "total_votes": 1035,
          "image_url": "https://cdn.babyvote.com/staging/entry/image/bfa978f4-c745-4b72-8cd3-dbf36592fe02/thumbnail_cropped_entry_ava.png",
          "global_rank": 1,
          "full_name": "Firstname Lastname"
        },
        {
          "id": "f0547070-048a-400b-8970-a3aaf40de2cd",
          "slug": "girl-sharpewitz",
          "total_votes": 402,
          "image_url": "https://cdn.babyvote.com/staging/entry/image/f0547070-048a-400b-8970-a3aaf40de2cd/thumbnail_cropped_entry_went_wrong.png",
          "global_rank": 2,
          "full_name": "Girl Sharpewitz"
        },
        {
          "id": "dd6efc58-14fd-456b-a3f7-3d157cea8307",
          "slug": "test-dinglesen",
          "total_votes": 201,
          "image_url": "https://cdn.babyvote.com/staging/entry/image/dd6efc58-14fd-456b-a3f7-3d157cea8307/thumbnail_cropped_entry_happy-birthday-meme-267.jpg",
          "global_rank": 3,
          "full_name": "Test Dinglesen"
        }
      ],
      "meta": {
        "per": 20,
        "page": 1,
        "total_count": 3
      }
    }
    render json: pets
  end

  def create
  end

  def show
    pet= {
      "entry": {
        "id": "dd6efc58-14fd-456b-a3f7-3d157cea8307",
        "slug": "test-dinglesen",
        "total_votes": 201,
        "image_url": "https://cdn.babyvote.com/staging/entry/image/dd6efc58-14fd-456b-a3f7-3d157cea8307/cropped_entry_cropped_entry_happy-birthday-meme-267.jpg",
        "featured": false,
        "rank": 2,
        "first_name": "Test",
        "last_name": "Dinglesen",
        "full_name": "Test Dinglesen",
        "country": "RU",
        "gender": "male",
        "next_slug": 'null',
        "previous_slug": "name-cho",
        "owner_name": "Ruth Dinglesen",
        "owner_id": "7105c3a8-b075-4eed-b0f2-b0d18f961046",
        "contest": {
          "id": "59d99687-075e-4ee3-8785-cb09ea132c83",
          "slug": "boys",
          "competition_id": "4162ee97-12f8-4f6a-9a98-70dc3b6ba2ce",
          "en_slug": "boy",
          "started_at": "2020-12-01T08:10:10.157Z",
          "prize": 12668,
          "prize_currency": "£"
        }
      }
    }
    render json: pet
  end

  def destroy
  end
end
