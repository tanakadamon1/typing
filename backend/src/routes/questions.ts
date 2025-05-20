import { Router } from 'express'
import { db } from '../db'

const router = Router()

// 一覧取得
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM question')
    res.json(rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'DB取得エラー' })
  }
})

// 追加API
router.post('/', async (req, res) => {
  const { text, hiragana } = req.body
  try {
    await db.query('INSERT INTO question (text, hiragana) VALUES (?, ?)', [text, hiragana])
    res.status(201).json({ message: '追加しました' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: '追加エラー' })
  }
})

// 削除API
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    await db.query('DELETE FROM question WHERE id = ?', [id])
    res.json({ message: '削除しました' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: '削除エラー' })
  }
})

export default router
